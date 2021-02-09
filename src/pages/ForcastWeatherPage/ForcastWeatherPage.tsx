import React from "react";
import Select from "react-select";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import {
  LocationWeatherData,
  FilterDropDownOptions,
  Coordinates,
  LocationDropDownOption,
} from "../../redux/weather/types";

import "./styles/forcast-weather-page.css";

interface PageProps {
  locationOptions: LocationDropDownOption[];
  filterOptions: FilterDropDownOptions[];
  onChangeDropdown: (value: Coordinates) => void;
  onChangeFilterDropdown: (value: string) => void;
  onChangeFilter: (filterValue: string) => void;
  extendedWeatherForcast: LocationWeatherData[];
}

function ForcastWeather({
  locationOptions,
  filterOptions,
  onChangeDropdown,
  onChangeFilterDropdown,
  extendedWeatherForcast,
  onChangeFilter,
}: PageProps) {
  return (
    <div>
      <div className="forcast-weather-filters">
        <Select
          onChange={(selection) => onChangeDropdown(selection!.value)}
          options={locationOptions}
          className="forcast-weather-dropdown"
          placeholder="Select location"
        />
        <Select
          onChange={(selection) => onChangeFilterDropdown(selection!.value)}
          options={filterOptions}
          className="filter-dropdown"
          placeholder="Select Filter By Temp"
        />
        <input
          placeholder="filter by temp"
          className="forcast-weather-search"
          type="number"
          onChange={(e) => onChangeFilter(e.target.value)}
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
