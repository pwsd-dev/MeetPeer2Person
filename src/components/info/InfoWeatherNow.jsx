import React from "react";

function InfoWeatherNow(props) {
  return (
    <div className="page">
      {props.tempNow ? (
        <div className="">
          <div className="">
            <div className="pdl-20 d-flex align-center">
              <div className="iconAndTemp-wrapper">
                {
                  <img
                    src={`https://openweathermap.org/img/wn/${props.iconNow}`}
                    alt=""
                    width={65}
                    height={65}
                  />
                }
                <p className="page__text-24-Regular ">{props.tempNow} &#176;</p>
              </div>
              <div className="dateNow-column d-flex align-center">
                <p className="page__text-24-Regular margin-15">Now </p>
                <p className="page__text-16-Regular">({props.dateNow})</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InfoWeatherNow;
