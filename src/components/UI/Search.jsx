export function Search({search, setSearch, filter, setFilter}) {

    const handleInputChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value.trim())
    };

    const handleSelectChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    };

    return (
        <div className="max-w-[84rem] w-[90%] mx-auto my-15 flex flex-col sm:flex-row justify-between gap-2">
            <input className="bg-stone-700 py-1 px-1.5 sm:px-2.5 outline-0"
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
            />

            <select className="bg-stone-700 py-1.5 px-1.5 sm:px-2.5 outline-0"
            value={filter}
            onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </div>
    );
};