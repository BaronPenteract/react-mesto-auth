import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../images/header__logo.svg';

export default function Header() {
  const location = useLocation();

  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  let headerAuthElement;
  if (location.pathname === '/sing-up') {
    headerAuthElement = (
      <Link to="/sing-in" className="header__auth-link link">
        Регистрация
      </Link>
    );
  } else if (location.pathname === '/sing-in') {
    headerAuthElement = (
      <Link to="/sing-up" className="header__auth-link link">
        Войти
      </Link>
    );
  } else {
    headerAuthElement = (
      <>
        <div className={`header__auth ${isBurgerActive ? 'header__auth_active' : ''}`}>
          <span className="header__email">email@mail.com</span>
          <a href="/" className="header__logout-link link">
            Выйти
          </a>
        </div>
        <button className="burger" type="button" onClick={() => setIsBurgerActive(!isBurgerActive)}>
          <span className={`burger__line ${isBurgerActive ? 'burger__line_active' : ''}`}></span>
        </button>
      </>
    );
  }

  return (
    <header className={`header ${isBurgerActive ? 'header_active' : ''}`}>
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
      {headerAuthElement}
    </header>
  );
}
