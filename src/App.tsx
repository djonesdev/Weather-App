import "./App.css";
import { Route, Switch } from "react-router-dom";
import SingleLocationWeatherPage from "./pages/SingleLocationWeatherPage/SingleLocationWeather.page";
import ForcastWeatherPage from "./pages/ForcastWeatherPage/ForcastWeatherPage.page";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SingleLocationWeatherPage} />
      <Route path="/forcast" component={ForcastWeatherPage} />
    </Switch>
  );
}

export default App;
