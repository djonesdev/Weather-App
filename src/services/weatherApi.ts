import axios from "axios";

import { LocationQuery } from "../redux/weather/types"

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
  headers: {
    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    "useQueryString": true,
  },
});

export const weatherApi = {
  getWeatherByLocation: (locationData: LocationQuery) => {
    const data = instance.get("/current", { params: { lon: locationData.lon, lat: locationData.lat }});
    return data;
  },
};
