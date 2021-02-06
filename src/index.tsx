import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store, Dispatch } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import App from "./App"
import { weatherReducer } from "./redux/weather/reducer"
import { weatherSagaWatcher } from "./redux/weather/sagas"
import { WeatherActionTypes, WeatherState } from "./redux/weather/types"
import { all } from "redux-saga/effects"

const sagaMiddleware = createSagaMiddleware()

export default function* rootSaga() {
  yield all([
    weatherSagaWatcher(),
  ])
}

const store: Store<WeatherState, WeatherActionTypes> & {
  dispatch: Dispatch
} = createStore(weatherReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)