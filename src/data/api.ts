import axios from "axios";

export const myShop = axios.create({
   baseURL: process.env.API_BASE,
})