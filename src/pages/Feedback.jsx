import React from "react";
import HeaderMain from "../components/header/HeaderMain";

function Feedback() {
  return (
    <div>
      <HeaderMain />
      <div className="feedback-content wrapper">
        <p className="page__text-32-Bold">Оставить отзыв</p>
        <textarea name="" id="" cols="30" rows="15"></textarea>
        <p className="page__text-15-Regular">Ваше мнение очень важно для нас</p>
        <button className="page__btn-4">Отправить</button>
      </div>
    </div>
  );
}

export default Feedback;
