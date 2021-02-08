import React from "react";
import Select from "react-select";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { LocationDropDownOption, Coordinates } from "./ForcastWeatherPage.page";
import { LocationWeatherData } from "../../redux/weather/types";

import "./styles/forcast-weather-page.css";

interface PageProps {
  dropdownOptions: LocationDropDownOption[];
  onChangeDropdown: (value: Coordinates) => void;
  setFilterValue: (filterValue: string) => void
  extendedWeatherForcast: LocationWeatherData[];
}

function ForcastWeather({
  dropdownOptions,
  onChangeDropdown,
  extendedWeatherForcast,
  setFilterValue
}: PageProps) {
  return (
    <div>
      <div className="forcast-weather-filters">
        <Select
          onChange={(selection) => onChangeDropdown(selection!.value)}
          options={dropdownOptions}
          className="forcast-weather-dropdown"
        />
        <input
          placeholder="filter by temp"
          className="forcast-weather-search"
          type="number"
          onChange={e => setFilterValue(e.target.value)}
        />
      </div>
      <div className="forcast-weather-carousel">
        {extendedWeatherForcast.map((dayData) => (
          <div>
            <WeatherCard locationData={dayData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForcastWeather;
