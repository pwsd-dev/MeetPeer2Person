import React from "react";
import Select from "../select/Select";
import InfoWeather from "../info/InfoWeather";
import InfoWeatherNow from "../info/InfoWeatherNow";
import Chart from "../chart/Chart";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "bdce1da93d55ddf7f78ad18e34f4d97a";

function WeatherComponent() {
  const [stateMain, setStateMain] = React.useState({});

  const gettingWeather = async (e) => {
    const city = e.target.getAttribute("name");
    const apiUrl = await axios
      .get(
        `
        https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then(({ data }) => {
        console.log(data);
        setStateMain({
          tempNow: Math.round(data.list[0].main.temp),
          dateNow: data.list[0].dt_txt,
          iconNow: data.list[0].weather[0].icon + ".png",
          tempTommorow: Math.round(data.list[8].main.temp),
          dateTommorow: data.list[8].dt_txt,
          iconTommorow: data.list[8].weather[0].icon + ".png",
          tempThird: Math.round(data.list[16].main.temp),
          dateThird: data.list[16].dt_txt,
          iconThird: data.list[16].weather[0].icon + ".png",
          tempFourth: Math.round(data.list[24].main.temp),
          dateFourth: data.list[24].dt_txt,
          iconFourth: data.list[24].weather[0].icon + ".png",
          tempFifth: Math.round(data.list[32].main.temp),
          dateFifth: data.list[32].dt_txt,
          iconFifth: data.list[32].weather[0].icon + ".png",
        });
      });
  };
  return (
    <div className="wrapper weather-wrapper back">
      <div className="wrapper-select">
        <Select weatherMethod={gettingWeather} />
      </div>
      <div className="infoAndChart">
        <div className="column">
          <InfoWeatherNow
            tempNow={stateMain.tempNow}
            dateNow={stateMain.dateNow}
            iconNow={stateMain.iconNow}
            tempTommorow={stateMain.tempTommorow}
            dateTommorow={stateMain.dateTommorow}
            iconTommorow={stateMain.iconTommorow}
            tempThird={stateMain.tempThird}
            dateThird={stateMain.dateThird}
            iconThird={stateMain.iconTommorow}
            tempFourth={stateMain.tempFourth}
            dateFourth={stateMain.dateFourth}
            tempFifth={stateMain.tempFifth}
            dateFifth={stateMain.dateFifth}
          />
          <Chart
            tempNow={stateMain.tempNow}
            dateNow={stateMain.dateNow}
            tempTommorow={stateMain.tempTommorow}
            dateTommorow={stateMain.dateTommorow}
            tempThird={stateMain.tempThird}
            dateThird={stateMain.dateThird}
            tempFourth={stateMain.tempFourth}
            dateFourth={stateMain.dateFourth}
            tempFifth={stateMain.tempFifth}
            dateFifth={stateMain.dateFifth}
          />
        </div>

        <InfoWeather
          tempNow={stateMain.tempNow}
          dateNow={stateMain.dateNow}
          iconNow={stateMain.iconNow}
          tempTommorow={stateMain.tempTommorow}
          dateTommorow={stateMain.dateTommorow}
          tempThird={stateMain.tempThird}
          dateThird={stateMain.dateThird}
          tempFourth={stateMain.tempFourth}
          dateFourth={stateMain.dateFourth}
          tempFifth={stateMain.tempFifth}
          dateFifth={stateMain.dateFifth}
          iconNow={stateMain.iconNow}
          iconTommorow={stateMain.iconTommorow}
          iconThird={stateMain.iconTommorow}
          iconFourth={stateMain.iconFourth}
          iconFifth={stateMain.iconFifth}
        />
      </div>
    </div>
  );
}

export default WeatherComponent;
