import { NavLink } from "react-router-dom";

export function CountryCard({ country }) {
    const { flags, name, capital, population, region } = country
    return (
        <li className="px-6 py-6 bg-neutral-800 shadow-2xl shadow-slate-950">
            <img className="w-full h-42"
                src={flags.png} alt={name.common} />

            <div className="mt-4 mb-0 flex flex-col gap-2">
                <h1 className="text-3xl"><span>{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</span></h1>
                <p > <span className="text-stone-300">Capital: </span> {capital[0]}</p>
                <p> <span className="text-stone-300">Population:</span> {population}</p>
                <p> <span className="text-stone-300">Region:</span>  {region}</p>
            </div>

            <button className="mt-4 bg-neutral-700 px-2 py-1 sm:px-4 rounded-xl border"><NavLink to={`/countries/${name.common}`}>Read More</NavLink></button>
        </li>
    );
};