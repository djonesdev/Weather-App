import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import SingleLocationWeather from "./SingleLocationWeather";
import { RootState } from "../../redux";
import { getWeatherByLocation } from "../../redux/weather/actions";
import { LocationWeatherData } from "../../redux/weather/types";
import { select } from "redux-saga/effects";

export interface Coordinates {
  lat: string;
  lon: string;
}
export interface LocationDropDownOption {
  value: Coordinates;
  label: string;
}

export const SingleLocationWeatherPage = (props: any) => {
  const [selectedLocation, setSelectedLocation] = useState<Coordinates>({
    lon: "-0.118092",
    lat: "51.509865",
  });

  useEffect(() => {
    props.getWeatherByLocation(selectedLocation);
  }, [selectedLocation]);

  // In a real application i would expect these options to come from an api response
  const options: LocationDropDownOption[] = [
    { value: { lon: "-0.118092", lat: "51.509865" }, label: "London" },
    { value: { lon: "-73.935242", lat: "40.730610" }, label: "New York" },
    { value: { lon: "72.854118", lat: "19.228825" }, label: "Mumbai" },
    { value: { lon: "151.209900", lat: "-33.865143" }, label: "Sydney" },
    { value: { lon: "139.839478", lat: "151.209900" }, label: "Tokyo" },
  ];

  const onClickNext = () => {
      props.history.push("/forcast")
  }

  if(!props.weather.currentLocationWeather[0]) return <></>
  return (
    <SingleLocationWeather
      dropdownOptions={options}
      locationData={props.weather.currentLocationWeather[0]}
      onChangeDropdown={setSelectedLocation}
      onClickNext={onClickNext}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  weather: state,
});

const mapDispatchToProps = {
  getWeatherByLocation: getWeatherByLocation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleLocationWeatherPage);
