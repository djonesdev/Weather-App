import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ForcastWeather from "./ForcastWeatherPage";
import { RootState } from "../../redux";
import { getExtendedWeatherForcastByLocation } from "../../redux/weather/actions";
import {
  LocationWeatherData,
  Coordinates,
  FilterDropDownOptions,
  LocationDropDownOption,
  FILTER_TEMP_OPTIONS,
} from "../../redux/weather/types";

export const ForcastWeatherPage = (props: any) => {
  const [selectedLocation, setSelectedLocation] = useState<Coordinates>({
    lon: "-0.118092",
    lat: "51.509865",
  });
  const [filteredLocationData, setFilteredLocationData] = useState<
    LocationWeatherData[]
  >([]);
  const [
    filterDropdownSelectedOption,
    setFilterDropdownSelectedOption,
  ] = useState<string>(FILTER_TEMP_OPTIONS.MAX);

  // In a real application i would expect these options to come from an api response
  const locationOptions: LocationDropDownOption[] = [
    { value: { lon: "-0.118092", lat: "51.509865" }, label: "London" },
    { value: { lon: "-73.935242", lat: "40.730610" }, label: "New York" },
    { value: { lon: "72.854118", lat: "19.228825" }, label: "Mumbai" },
    { value: { lon: "151.209900", lat: "-33.865143" }, label: "Sydney" },
    { value: { lon: "139.839478", lat: "151.209900" }, label: "Tokyo" },
  ];

  const filterOptions: FilterDropDownOptions[] = [
    { value: FILTER_TEMP_OPTIONS.MAX, label: "Max Temp" },
    { value: FILTER_TEMP_OPTIONS.MIN, label: "Min Temp" },
  ];

  useEffect(() => {
    props.getExtendedWeatherByLocation(selectedLocation);
  }, [selectedLocation]);

  useEffect(() => {
    setFilteredLocationData(props.weather.currentLocationExtendedWeather);
  }, [props.weather.currentLocationExtendedWeather]);

  const onChangeFilter = (filterValue: string) => {
    if (!filterValue) {
      setFilteredLocationData(props.weather.currentLocationExtendedWeather);
      return;
    } else {
      if (filterDropdownSelectedOption === FILTER_TEMP_OPTIONS.MAX) {
        const filteredWeatherData = props.weather.currentLocationExtendedWeather.filter(
          (data: LocationWeatherData) => data.temp >= parseFloat(filterValue)
        );
        setFilteredLocationData(filteredWeatherData);
      }
      if (filterDropdownSelectedOption === FILTER_TEMP_OPTIONS.MIN) {
        const filteredWeatherData = props.weather.currentLocationExtendedWeather.filter(
          (data: LocationWeatherData) => data.temp <= parseFloat(filterValue)
        );
        setFilteredLocationData(filteredWeatherData);
      }
    }
  };

  return (
    <ForcastWeather
      locationOptions={locationOptions}
      filterOptions={filterOptions}
      onChangeDropdown={setSelectedLocation}
      onChangeFilter={onChangeFilter}
      onChangeFilterDropdown={setFilterDropdownSelectedOption}
      extendedWeatherForcast={filteredLocationData}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  weather: state,
});

const mapDispatchToProps = {
  getExtendedWeatherByLocation: getExtendedWeatherForcastByLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForcastWeatherPage);
