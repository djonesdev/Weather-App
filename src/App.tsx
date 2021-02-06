import React, { useEffect, useState } from 'react';
import Select from 'react-select'

import logo from './logo.svg';
import './App.css';
import { RootState } from './redux';
import { getWeatherByLocation } from './redux/weather/actions';
import { connect, ConnectedProps } from 'react-redux';

type Props = PropsFromRedux

interface Coordinates {
  lat: string
  lon: string
}
interface LocationDropDownOption {
  value: Coordinates
  label: string
}

function App({ getWeatherByLocation, weather }: Props) {
  const [selectedLocation, setSelectedLocation] = useState<Coordinates>({ lon: "-0.118092", lat: "51.509865" })
  
  const options: LocationDropDownOption[] = [
    { value: { lon: "-0.118092", lat: "51.509865" }, label: 'London' },
    { value: { lon: "-73.935242", lat: "40.730610" }, label: 'New York' },
    { value: { lon: "72.854118", lat: "19.228825" }, label: 'Mumbai' },
    { value: { lon: "151.209900", lat: "-33.865143" }, label: 'Sydney' },
    { value: { lon: "139.839478", lat: "151.209900" }, label: 'Tokyo' },
  ]

  useEffect(() => {
    // getWeatherByLocation(selectedLocation)
  }, [selectedLocation])

  return (
    <div className="App">
       <Select onChange={selection => setSelectedLocation(selection!.value)} options={options} />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  weather: state
})

const connector = connect(
  mapStateToProps,
  { getWeatherByLocation }
)

type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(App);
