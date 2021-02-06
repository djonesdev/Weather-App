export const GET_WEATHER_START = "GET_WEATHER_START";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";

export interface GetWeatherAction {
  type: typeof GET_WEATHER_START
  payload: LocationQuery
}

export interface LocationQuery {
  lon: string
  lat: string
}

interface GetWeatherSuccessAction {
  type: typeof GET_WEATHER_SUCCESS
  payload: LocationWeatherData[]
}

interface GetWeatherErrorAction {
  type: typeof GET_WEATHER_ERROR
  payload: string
}

export interface WeatherState {
  currentLocationWeather: LocationWeatherData[]
  error: string
}

export interface LocationWeatherData {
  rh: number;
  pod: string;
  lon: number;
  pres: number;
  timezone: string;
  ob_time: Date;
  country_code: string;
  clouds: number;
  ts: number;
  solar_rad: number;
  state_code: number;
  city_name: string;
  wind_spd: number;
  wind_cdir_full: string;
  wind_cdir: string;
  slp: number;
  vis: number;
  h_angle: number;
  sunset: number;
  dni: number;
  dewpt: number;
  snow: number;
  uv: number;
  precip: number;
  wind_dir: number;
  sunrise: number;
  ghi: number;
  dhi: number;
  aqi: number;
  lat: number;
  weather: WeatherData;
  datetime: Date;
  temp: number;
  station: string;
  elev_angle: number;
  app_temp: number;
  count: number;
}

export interface WeatherData {
  icon: string;
  code: number;
  description: string;
}

export type WeatherActionTypes =
  | GetWeatherAction
  | GetWeatherErrorAction
  | GetWeatherSuccessAction
  | GetWeatherErrorAction
