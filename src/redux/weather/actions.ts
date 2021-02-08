import { GET_WEATHER_EXTENDED_START, GET_WEATHER_START, LocationQuery, WeatherActionTypes } from './types'

export function getWeatherByLocation(locationQuery: LocationQuery): WeatherActionTypes {
  return {
    type: GET_WEATHER_START,
    payload: locationQuery
  }
}

export function getExtendedWeatherForcastByLocation(locationQuery: LocationQuery): WeatherActionTypes {
  console.log('action called')
  return {
    type: GET_WEATHER_EXTENDED_START,
    payload: locationQuery
  }
}