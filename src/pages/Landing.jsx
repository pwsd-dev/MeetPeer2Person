import React from "react";
import HeaderLanding from "../components/header/HeaderLanding";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing page">
      <div className="wrapper">
        <HeaderLanding />
        <div className="content">
          <div className="main-wrapper">
            <p className="page__text-20-Semi">Хочу познакомиться</p>
            <div className="buttons-wrapper">
              <Link to="/auth">
                <button className="page__btn-1-blue">с мужчиной</button>
              </Link>
              <Link to="/auth">
                <button className="page__btn-1">с девушкой</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
