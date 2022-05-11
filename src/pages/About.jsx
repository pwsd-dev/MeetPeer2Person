import React from "react";
import HeaderMain from "../components/header/HeaderMain";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-landing">
      {/* <HeaderLanding /> */}
      <div className=" page">
        <div className="about-landing-banner"></div>
        <div className="">
          <div className="about-landing-content wrapper">
            <div className="about-landing-left">
              <div className="about-landing-left-top">
                <p className="page__text-32-Medium width">
                  О НАС можно сказать одной фразой
                </p>
              </div>
              <div className="about-landing-left-bottom">
                <p className="page__text-32-Medium">
                  здесь люди находят друг друга
                </p>
              </div>
            </div>
            <div className="about-landing-right">
              <nav className="nav-about">
                <Link to="/home">
                  <p className="page__text-24-Semi">Главная</p>
                </Link>
                <Link to="/contacts">
                  <p className="page__text-24-Semi">Контакты</p>
                </Link>
                <Link to="/">
                  <p className="page__text-24-Semi">Выход</p>
                </Link>
              </nav>
              <div className="about-landing-description">
                <Link to="/home">
                  <div className="logo">
                    <svg
                      width="120"
                      height="112"
                      viewBox="0 0 84 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.92378 5.99143C16.1451 -1.96654 32.2218 -2.01563 41.4545 5.95543C41.5455 6.03396 41.6289 6.11904 41.7085 6.20412C46.9827 2.6767 53.057 0.0327647 59.8213 0.0196759C62.9359 0.00920908 66.0219 0.531577 68.9011 1.55659C71.7803 2.58159 74.3955 4.08892 76.5957 5.99143C78.7152 7.82385 80.4745 9.80353 81.6765 12.2806C82.8822 14.7544 83.4586 17.5717 83.451 20.9944C83.451 30.7194 75.6895 39.9993 67.2644 47.4141C59.3095 54.4166 50.1753 60.2542 44.6129 63.8045L43.4337 64.5571C42.942 64.8724 42.3458 65.0426 41.7332 65.0426C41.1206 65.0426 40.5243 64.8724 40.0326 64.5571L38.8496 63.8045C33.291 60.2542 24.1569 54.4166 16.202 47.4141C7.78449 40.0091 0.0343239 30.7423 0.0115739 21.0304V21.0697V20.9911V21.0304C-0.0894582 18.249 0.47185 15.4792 1.66078 12.8924C2.84971 10.3056 4.64097 7.95688 6.92378 5.99143ZM37.3822 9.40105C30.3828 3.39985 17.9537 3.43584 10.9581 9.47304C9.21047 10.9766 7.84262 12.7763 6.94076 14.7587C6.0389 16.741 5.62258 18.8631 5.71803 20.9911C5.71803 28.6219 11.9743 36.6649 20.2742 43.9685C27.6566 50.467 36.1386 55.9447 41.7351 59.5179C44.4989 57.7638 47.228 55.9693 49.9213 54.1352L41.8071 47.6759C41.5318 47.4567 41.3091 47.1929 41.1519 46.8995C40.9947 46.6061 40.906 46.2888 40.8908 45.9658C40.8757 45.6428 40.9344 45.3204 41.0637 45.017C41.1929 44.7136 41.3901 44.4352 41.6441 44.1975C41.898 43.9599 42.2037 43.7678 42.5437 43.6321C42.8837 43.4964 43.2513 43.4199 43.6256 43.4068C43.9998 43.3937 44.3734 43.4444 44.725 43.5559C45.0766 43.6675 45.3993 43.8377 45.6746 44.0568L54.3765 50.9873C56.7122 49.2858 59.0857 47.4534 61.3911 45.5162L53.2011 38.998C52.645 38.555 52.3156 37.9395 52.2854 37.2868C52.2551 36.6342 52.5266 35.998 53.0399 35.518C53.5533 35.0381 54.2665 34.7539 55.0228 34.7278C55.779 34.7017 56.5163 34.9359 57.0724 35.379L65.3685 41.9888C67.4491 40.0499 69.3843 37.9984 71.1622 35.8469L68.9441 33.9294L62.684 28.5237C58.5966 25.0094 51.9271 25.0716 47.7638 28.6644C46.3268 29.9079 44.8822 31.1448 43.4717 32.3489C39.1492 36.0269 32.2483 35.8731 28.0396 32.2082C26.1855 30.5885 24.3237 28.9753 22.4469 27.3588C21.9408 26.9211 21.6442 26.3351 21.6161 25.7172C21.588 25.0994 21.8304 24.495 22.2952 24.0245C23.1824 23.1213 24.1266 22.1397 25.12 21.1024C28.6387 17.4376 32.7905 13.1117 37.3822 9.40105ZM74.2562 31.5538C76.4516 28.0198 77.7445 24.4629 77.7445 20.9911C77.7521 18.0494 77.2592 15.9127 76.4174 14.185C75.5833 12.4638 74.3282 10.9979 72.5613 9.47304C70.8929 8.02927 68.9091 6.88557 66.7248 6.1082C64.5405 5.33082 62.1992 4.93523 59.8365 4.94432C53.5423 4.95741 47.5136 8.05618 41.7502 12.6209C37.2761 16.1679 33.2835 20.3204 29.6624 24.0932L28.3315 25.4773C29.5866 26.5637 30.8454 27.6501 32.0967 28.743C33.059 29.5984 34.3754 30.0891 35.7567 30.1076C37.1381 30.126 38.4714 29.6705 39.4639 28.8411C40.8668 27.6468 42.3 26.4197 43.7295 25.1828C50.0312 19.7412 60.3104 19.535 66.707 25.0356C68.8303 26.8615 70.9537 28.7004 72.9936 30.4609L74.2562 31.5538Z"
                        fill="white"
                      />
                    </svg>
                    <p className="page__text-15-Medium">Happiness</p>
                  </div>
                </Link>
                <p className="page__text-28-Medium-black">
                  каждый день посещают тысячи пользователей. Возможно, именно
                  сейчас Вам хочет написать человек, который станет Вашей
                  судьбой!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-landing-advantages">
        <div className="about-landing-advantages-content wrapper">
          <div className="about-landing-advantages-left">
            <p className="page__text-32-Medium"># 1</p>
            <p className="page__text-32-Medium">
              Наша современная система поиска включает большое колличество
              критериев и позволяет выбирать по целому комплексу параметров:
            </p>
          </div>
          <div className="about-landing-advantages-mid">
            <p className="page__text-32-Medium"># 2</p>
            <p className="page__text-32-Medium">
              пол, ориентация; возраст; город проживания; внешние данные;
              увлечения; знак Зодиака; сфера деятельности и многое другое
            </p>
          </div>
          <div className="about-landing-advantages-right">
            <p className="page__text-32-Medium"># 3</p>
            <p className="page__text-32-Medium">
              В сравнении с традиционными методами знакомства, Happiness имеет
              огромное преимущество в сфере серьезных знакомств – подбор пары по
              заданным параметрам.
            </p>
          </div>
        </div>
        <div className="about-landing-compatibility wrapper">
          <p className="page__text-25-Medium">
            Мы будем показывать только тех, кто максимально соответствует твоим
            требованиям и совместим с тобой.
          </p>
        </div>
      </div>
      <div className="about-landing-find-love">
        <div className="about-landing-find-love-background-left"></div>
        <div className="about-landing-find-love-background-right"></div>
        <div className="about-landing-find-love-content wrapper">
          <div className="about-landing-find-love-left ">
            <p className="page__text-32-Medium">
              Находите друзей и любовь по всему миру!
            </p>
            <p className="page__text-25-Medium">
              найти настоящую любовь, лучшего друга или интересного собеседника?
              Для того чтобы соединять сердца и дарить радость общения
              существует наш сайт знакомств
            </p>
            <p className="page__text-20-Semi">Happiness</p>
          </div>
          <div className="about-landing-find-love-right">
            <p className="page__text-25-Medium">
              Каждый может проявить себя, отбросить комплексы и предубеждения,
              попробовать нечто новое, открыть для себя целый мир.
            </p>
            <Link to="/auth">
              <button className="page__btn-3">Зарегистрироваться</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
