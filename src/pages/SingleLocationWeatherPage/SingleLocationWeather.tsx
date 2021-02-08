import React from "react";
import Select from "react-select";
import Button from "../../components/Button/Button";

import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { LocationWeatherData } from "../../redux/weather/types";
import {
  LocationDropDownOption,
  Coordinates,
} from "./SingleLocationWeather.page";
import "./styles/single-location-weather-page.css";

interface PageProps {
  dropdownOptions: LocationDropDownOption[];
  locationData: LocationWeatherData;
  onChangeDropdown: (value: Coordinates) => void;
  onClickNext: () => void;
}

function ForcastWeather({
  dropdownOptions,
  onChangeDropdown,
  locationData,
  onClickNext,
}: PageProps) {
  return (
    <div className="location-weather-page">
      <div className="location-selector">
        <Select
          onChange={(selection) => onChangeDropdown(selection!.value)}
          options={dropdownOptions}
        />
      </div>
      <WeatherCard locationData={locationData} />
      <Button
        size="medium"
        text="Next Page"
        type="primary"
        onClick={onClickNext}
      />
    </div>
  );
}

export default ForcastWeather;
