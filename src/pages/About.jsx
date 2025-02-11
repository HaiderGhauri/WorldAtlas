import countriesData from "../apiCalling/countries.json";

export function About() {
    return (
        <section>
            <div className="max-w-7xl w-[90%] mx-auto my-15 flex flex-col justify-center items-center gap-14">

                <h2 className="text-3xl sm:text-4xl text-center"> Here are the Interesting Facts
                    <br />
                    we’re proud of
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {countriesData.map((curCountry) => {
                        return(
                            <li className="px-6 py-6 bg-neutral-800 shadow-2xl shadow-slate-950 border rounded-2xl flex flex-col gap-1.5"
                            key={curCountry.id}>
                                <h2 className="text-2xl mb-2"
                                >{curCountry.countryName}</h2>
                                <p> <span className="text-stone-300">Capital: </span>{curCountry.capital}</p>
                                <p> <span className="text-stone-300">Population: </span>{curCountry.population}</p>
                                <p> <span className="text-stone-300">Intresting Facts: </span>{curCountry.interestingFact}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};