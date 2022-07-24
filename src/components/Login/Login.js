import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import Style from './Login.module.css';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/token/login/';

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/app/home';

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('Eliaskhalilipour');
  const [pwd, setPwd] = useState('Ek@123456');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      setAuth(JSON.parse(auth));
      navigate(from, { replace: true });
    } else {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, {
        username: user,
        password: pwd,
      });
      const accessToken = response?.data?.auth_token;
      setAuth({ accessToken });
      localStorage.setItem('auth', JSON.stringify({ accessToken }));

      setUser('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('پاسخی از سرور دریافت نشد');
      } else if (err.response?.status === 400) {
        setErrMsg('نام کاربری یا رمز عبور اشتباه است');
      } else {
        setErrMsg('ورود با مشکل مواجه شده است');
      }
      errRef.current.focus();
    }
  };

  if (localStorage.getItem('auth')) return;

  return (
    <div className={Style.loginContainer}>
      <div className={Style.circle}></div>
      <form className={Style.form} onSubmit={handleSubmit}>
        <p
          ref={errRef}
          className={errMsg ? Style.errmsg : Style.offscreen}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h2 className={Style.form__title}>ورود</h2>
        <p className={Style.form__paragraph}>سامانه پزشک یار</p>
        <div className={Style.form__container}>
          <div className={Style.form__group}>
            <input
              type="text"
              id="name"
              ref={userRef}
              className={`${Style.form__input} formInput`}
              placeholder=" "
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="name" className={Style.form__label}>
              نام کاربری
            </label>
            <span className={Style.form__line}></span>
          </div>
          <div className={Style.form__group}>
            <input
              type="password"
              id="password"
              className={`${Style.form__input} formInput`}
              placeholder=" "
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <label htmlFor="password" className={Style.form__label}>
              رمز عبور
            </label>
            <span className={Style.form__line}></span>
          </div>
          <input type="submit" className={Style.form__submit} value="ورود" />
        </div>
      </form>
    </div>
  );
};

export default Login;
