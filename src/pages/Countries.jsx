import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../apiCalling/getData";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { Search } from "../components/UI/Search";

export function Countries() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountriesData();
            setCountries(res.data);
            // console.log(res);
        });
    }, []);
    // console.log(countries);
    if (isPending) return <Loader />;

    const searchCountry = (country) => {
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        };
        return country; 
            
    };

    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter
    };

    const searchFilter = countries.filter((country) => searchCountry(country) && filterRegion(country));

    return (
        <section>

            <Search 
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter} 
            />

            <div className="max-w-7xl w-[90%] mx-auto my-15">
                <div>
                    <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {searchFilter.map((country, index) => {
                            return <CountryCard key={index} country={country} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};