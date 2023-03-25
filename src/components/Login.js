import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/Auth';

const Login = ({ setLoggedIn, setIsSuccessAuth, setIsInfoTooltipOpen, setEmail }) => {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    login(formValue)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setEmail(formValue.email);
          setLoggedIn(true);
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        setIsSuccessAuth(false);
        setIsInfoTooltipOpen(true);
        console.log(err);
      });
  };

  return (
    <main className="auth">
      <form className={`form-auth`} name="formLogin" onSubmit={submitHandler} action="/" noValidate>
        <h1 className="form-auth__title">Вход</h1>

        <fieldset className="form-auth__input-container">
          <input
            className={`form-auth__input`}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className={`form-auth__input`}
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Пароль"
            required
          />
        </fieldset>
        <div className="form-auth__footer">
          <button
            className={`form-auth__btn form-auth__btn_type_submit `}
            disabled={false}
            type="submit"
          >
            Войти
          </button>
          <span className="form-auth__under-text"></span>
        </div>
      </form>
    </main>
  );
};

export default Login;