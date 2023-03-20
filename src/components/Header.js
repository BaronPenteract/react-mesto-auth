import logo from '../images/header__logo.svg';

export default function Header() {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
    </header>
  )
}