import { call, put, takeEvery } from "redux-saga/effects";
import { weatherApi } from "../../services/weatherApi";
import {
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
  GET_WEATHER_EXTENDED_START,
  GET_WEATHER_EXTENDED_SUCCESS,
  GET_WEATHER_EXTENDED_ERROR,
  GetWeatherAction,
  GetWeatherExtendedAction,
} from "./types";

export function* getWeather({ payload }: GetWeatherAction) {
  console.log(payload, "payload");
  try {
    const { data } = yield call(weatherApi.getWeatherByLocation, payload);
    console.log(data, "response")
    yield put({ type: GET_WEATHER_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    yield put({ type: GET_WEATHER_ERROR, payload: error });
  }
}

export function* getWeatherForcastExtended({
  payload,
}: GetWeatherExtendedAction) {
    console.log('saga called')
  try {
    const { data } = yield call(weatherApi.getLocationForcastExtended, payload);
    console.log(data, "saga data")
    yield put({ type: GET_WEATHER_EXTENDED_SUCCESS, payload: data.data});
  } catch (error) {
    console.error(error);
    yield put({ type: GET_WEATHER_EXTENDED_ERROR, payload: error });
  }
}

export function* weatherSagaWatcher() {
  yield takeEvery(GET_WEATHER_START, getWeather);
  yield takeEvery(GET_WEATHER_EXTENDED_START, getWeatherForcastExtended);
}
