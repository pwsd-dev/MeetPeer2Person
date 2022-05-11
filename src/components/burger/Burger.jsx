import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineMenu } from "react-icons";
import { FaBeer } from "react-icons/fa";

function Burger() {
  const handleClick = () => {
    const burger = document.querySelector(".burger");
    const burgerNav = document.querySelector(".burger-menu");
    burger.classList.toggle("burger-active");
    burgerNav.classList.toggle("burger-menu-active");
  };

  const BurgerIcon = () => {
    return (
      <div className="burger" onClick={handleClick}>
        <span className="burger-box">
          <span className="burger-inner"></span>
        </span>
      </div>
    );
  };

  const NavigationMenu = () => {
    return (
      <div className="burger-menu">
        <nav className="burger-menu-nav">
          <div className="burger-menu-item">
            <Link to="/aboutLanding">
              <p className="page__text-24-Regular">О нас</p>
            </Link>
          </div>
          <div className="burger-menu-item">
            <Link to="/ContactsBeforeAuth">
              <p className="page__text-24-Regular">Контакты</p>
            </Link>
          </div>
          <div className="burger-menu-item">
            <Link to="/login">
              <p className="page__text-24-Regular">Вход</p>
            </Link>
          </div>
          <div className="burger-menu-item">
            <Link to="/auth">
              <p className="page__text-24-Regular">Регистрация</p>
            </Link>
          </div>
        </nav>
      </div>
    );
  };

  return (
    <div>
      <BurgerIcon />
      <NavigationMenu />
    </div>
  );
}

export default Burger;
