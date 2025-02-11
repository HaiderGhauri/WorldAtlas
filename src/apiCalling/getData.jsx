import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1/"
});

export const getCountriesData = () => {
    return api.get("all?fields=name,population,region,flags,capital")
};

export const getCountryDetail = (name) => {
    return api.get(`https://restcountries.com/v3.1/name/${name}`)
};