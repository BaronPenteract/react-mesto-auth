import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../images/header__logo.svg';

export default function Header({ email }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  window.onresize = () => {
    setIsBurgerActive(false);
  };

  const singOut = () => {
    setIsBurgerActive(false);
    localStorage.removeItem('jwt');
    navigate('/sing-up', { replace: true });
  };

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
          <span className="header__email">{email}</span>
          <button type="button" className="header__logout-link link" onClick={singOut}>
            Выйти
          </button>
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
