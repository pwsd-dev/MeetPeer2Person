import React from "react";
import WeatherComponent from "../components/weather/WeatherComponent";
import HeaderMain from "../components/header/HeaderMain";

function WeatherPage() {
  return (
    <div className="wrapper">
      <HeaderMain />
      <WeatherComponent />
    </div>
  );
}

export default WeatherPage;
