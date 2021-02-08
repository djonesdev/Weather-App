import { LocationWeatherData } from "../../redux/weather/types";

import "./styles/weather-card.css";

interface CardProps {
  locationData: LocationWeatherData;
}

function WeatherCard({ locationData }: CardProps) {
  return (
    <div className="weather-card">
      <label>Date: {locationData.datetime}</label>
      <img
        src={`/icons/${locationData.weather.icon}.png`}
        alt="Weather Icon"
        className="weather-card-image"
      />
      <label>{locationData.weather.description}</label>
      <div className="description-row">
        <label className="description-title">Number of Clouds: </label>
        <p>{locationData.clouds}</p>
      </div>
      <div className="description-row">
        <label className="description-title">Expected Temp: </label>
        <p>{locationData.temp}</p>
      </div>
      <div className="description-row">
        <label className="description-title">Expected Wind Speed: </label>
        <p>{locationData.wind_spd} mph</p>
      </div>
    </div>
  );
}

export default WeatherCard;
