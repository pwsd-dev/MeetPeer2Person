import React from "react";

function InfoWeather(props) {
  return (
    <div className="margin center page back">
      {props.tempNow ? (
        <div className="d-flex column w-400 padding-20 margin-right-20">
          <div className="d-flex justify-between align-center">
            <div>
              <p className="page__text-24-Regular">Now </p>
              <p className="page__text-18-Regular">({props.dateNow})</p>
            </div>
            <div className="d-flex align-center">
              <p className="fz-20 page__text-24-Regular">
                {props.tempNow} &#176;
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${props.iconNow}`}
                alt=""
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className="d-flex justify-between align-center ">
            <div>
              <p className="page__text-24-Regular">Tommorow </p>
              <p className="page__text-18-Regular">({props.dateTommorow})</p>
            </div>
            <div className="d-flex align-center">
              <p className="page__text-18-Regular">
                {props.tempTommorow} &#176;
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${props.iconTommorow}`}
                alt=""
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className="d-flex justify-between align-center">
            <div>
              <p className="page__text-24-Regular">Third </p>
              <p className="page__text-18-Regular">({props.dateThird})</p>
            </div>

            <div className="d-flex align-center">
              <p className="page__text-18-Regular">{props.tempThird} &#176;</p>
              <img
                src={`https://openweathermap.org/img/wn/${props.iconThird}`}
                alt=""
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className="d-flex justify-between align-center">
            <div className="align-center">
              <p className="page__text-24-Regular">Fourth </p>
              <p className="page__text-18-Regular">({props.dateFourth})</p>
            </div>

            <div className="d-flex align-center">
              <p className="page__text-18-Regular">{props.tempFourth} &#176;</p>
              <img
                src={`https://openweathermap.org/img/wn/${props.iconFourth}`}
                alt=""
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className="d-flex justify-between align-center">
            <div>
              <p className="page__text-24-Regular">Fifth</p>
              <p className="page__text-18-Regular">({props.dateFifth})</p>
            </div>
            <div className="d-flex align-center">
              <p className="page__text-18-Regular">{props.tempFifth} &#176;</p>
              <img
                src={`https://openweathermap.org/img/wn/${props.iconFifth}`}
                alt=""
                width={65}
                height={65}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InfoWeather;
