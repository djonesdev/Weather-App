import {
    WeatherState,
    WeatherActionTypes,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR
  } from './types'
  
  const initialState: WeatherState = {
    currentLocationWeather: [], 
    error: ''
  }
  
  export function weatherReducer(
    state = initialState,
    action: WeatherActionTypes
  ): WeatherState {
    switch (action.type) {
      case GET_WEATHER_SUCCESS:
        return {
          ...state, 
          currentLocationWeather: action.payload
        } 
        case GET_WEATHER_ERROR:
          return {
            ...state, 
            error: action.payload
          } 
      default:
        return state
    }
  }