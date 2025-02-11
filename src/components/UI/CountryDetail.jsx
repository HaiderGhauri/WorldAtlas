import { NavLink, useParams } from "react-router-dom";
import { getCountryDetail } from "../../apiCalling/getData";
import { Loader } from "./Loader";
import { useEffect, useState, useTransition } from "react";

export function CountryDetail() {

    const param = useParams()
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState("");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryDetail(param.id);
            setCountry(res.data[0]);
        });
    }, []);
    console.log(country);
    if (isPending) return <Loader />;

    return (
        <section className="max-w-7xl w-[90%] mx-auto my-15 px-6 py-6 bg-neutral-800 shadow-2xl shadow-slate-950">
            {country && (
                <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">

                    <img className="w-64 h-62 mx-auto"
                        src={country.flags.png} alt={name.common} />

                    <div className="mt-4 mb-0 flex flex-col gap-2">
                        <h1 className="text-3xl">
                            {Object.keys(country.name.nativeName)
                                .map((key) => country.name.nativeName[key].common)
                                .join(" - ")}
                        </h1>

                        <h2>
                            <span className="text-stone-300">Official Name: </span> {country.name.official}
                        </h2>

                        <p>
                            <span className="text-stone-300">Capital: </span> {country.capital.join(" - ")}
                        </p>

                        <p>
                            <span className="text-stone-300">Population:</span> {country.population}
                        </p>

                        <p>
                            <span className="text-stone-300">Region:</span>  {country.region}
                        </p>

                        <p>
                            <span className="text-stone-300">Continent:</span>  {country.continents}
                        </p>

                        <p>
                            <span className="text-stone-300">Language(s): </span>
                            {Object.keys(country.languages)
                                .map((key) => country.languages[key])
                                .join(" - ")}
                        </p>

                        <p>
                            <span className="text-stone-300">Currency: </span>
                            {Object.keys(country.currencies)
                                .map((key) => `${country.currencies[key].name} - ${country.currencies[key].symbol} `)}
                        </p>

                        <p>
                            <span className="text-stone-300">TimeZone(s): </span>  
                            {/* {country.timezones.map((key) => country.timezones[key])} */}
                            {country.timezones.join(" - ")}
                        </p>
                    </div>
                </div>
            )}
            <button className="mt-4 bg-neutral-700 px-2 py-1 sm:px-4 rounded-xl border float-end"><NavLink to={`/countries`}>Go Back</NavLink></button>
        </section>
    )
}