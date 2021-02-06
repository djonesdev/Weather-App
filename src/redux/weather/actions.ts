import { GET_WEATHER_START, LocationQuery, WeatherActionTypes } from './types'

export function getWeatherByLocation(locationQuery: LocationQuery): WeatherActionTypes {
  return {
    type: GET_WEATHER_START,
    payload: locationQuery
  }
}