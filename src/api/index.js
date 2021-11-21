import axios from "axios";
// import {Sections} from "./movieEndPoints";


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
export const fetchData = async (endpoint) => await instance.get(endpoint)
