export const GET_WEATHER_START = "GET_WEATHER_START";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";

export const GET_WEATHER_EXTENDED_START = "GET_WEATHER_EXTENDED_START";
export const GET_WEATHER_EXTENDED_SUCCESS = "GET_WEATHER_EXTENDED_SUCCESS";
export const GET_WEATHER_EXTENDED_ERROR = "GET_WEATHER_EXTENDED_ERROR";

export interface GetWeatherAction {
  type: typeof GET_WEATHER_START;
  payload: LocationQuery;
}

export enum FILTER_TEMP_OPTIONS {
  MAX = "MAX",
  MIN = "MIN",
}

export interface GetWeatherExtendedAction {
  type: typeof GET_WEATHER_EXTENDED_START;
  payload: LocationQuery;
}

interface GetWeatherExtendedSuccessAction {
  type: typeof GET_WEATHER_EXTENDED_SUCCESS;
  payload: LocationWeatherData[];
}

interface GetWeatherExtendedErrorAction {
  type: typeof GET_WEATHER_EXTENDED_ERROR;
  payload: string;
}

export interface Coordinates {
  lat: string;
  lon: string;
}
export interface LocationDropDownOption {
  value: Coordinates;
  label: string;
}

export interface FilterDropDownOptions {
  value: string;
  label: string;
}

export interface LocationQuery {
  lon: string;
  lat: string;
}

interface GetWeatherSuccessAction {
  type: typeof GET_WEATHER_SUCCESS;
  payload: LocationWeatherData[];
}

interface GetWeatherErrorAction {
  type: typeof GET_WEATHER_ERROR;
  payload: string;
}

export interface WeatherState {
  currentLocationWeather: LocationWeatherData[];
  currentLocationExtendedWeather: LocationWeatherData[];
  error: string;
}

export interface LocationWeatherData {
  rh: number;
  pod: string;
  lon: number;
  pres: number;
  timezone: string;
  ob_time: string;
  country_code: string;
  clouds: number;
  ts: number;
  solar_rad: number;
  state_code: string;
  city_name: string;
  wind_spd: number;
  wind_cdir_full: string;
  wind_cdir: string;
  slp: number;
  vis: number;
  h_angle: number;
  sunset: string;
  dni: number;
  dewpt: number;
  snow: number;
  uv: number;
  precip: number;
  wind_dir: number;
  sunrise: string;
  ghi: number;
  dhi: number;
  aqi: number | null;
  lat: number;
  weather: WeatherData;
  datetime: string;
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
  | GetWeatherExtendedAction
  | GetWeatherExtendedSuccessAction
  | GetWeatherExtendedErrorAction
  | GetWeatherErrorAction
  | GetWeatherSuccessAction
  | GetWeatherErrorAction;
