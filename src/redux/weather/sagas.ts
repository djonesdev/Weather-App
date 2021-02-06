import { call, put, takeEvery } from 'redux-saga/effects'
import { weatherApi } from '../../services/weatherApi'
import { GET_WEATHER_ERROR, GET_WEATHER_START, GET_WEATHER_SUCCESS, GetWeatherAction } from './types'

export function* getWeather({ payload }: GetWeatherAction) {
  console.log(payload, "payload")
    try {
        const { response } = yield call(weatherApi.getWeatherByLocation, payload)
        yield put({ type: GET_WEATHER_SUCCESS, payload: response })
    } catch (error) {
        console.error(error)
        yield put({ type: GET_WEATHER_ERROR, payload: error })
    }
}

export function* weatherSagaWatcher() {
  yield takeEvery(GET_WEATHER_START, getWeather)
}