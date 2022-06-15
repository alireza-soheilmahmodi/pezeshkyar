import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import loginStyle from './Login.module.css';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/token/login/';

const Login = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/app';

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('Eliaskhalilipour');
  const [pwd, setPwd] = useState('Ek@123456');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
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

  return (
    <div className={loginStyle.loginContainer}>
      <section className={loginStyle.mainSection}>
        <p
          ref={errRef}
          className={errMsg ? loginStyle.errmsg : loginStyle.offscreen}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className={loginStyle.mainTitle}>ورود</h1>
        <form className={loginStyle.loginForm} onSubmit={handleSubmit}>
          <div>
            <label className={loginStyle.loginLabel} htmlFor="username">
              نام کاربری:
            </label>
            <br />
            <input
              className={loginStyle.loginInput}
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div>
            {' '}
            <label className={loginStyle.loginLabel} htmlFor="password">
              رمز عبور:
            </label>
            <br />
            <input
              className={loginStyle.loginInput}
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>

          <button className={loginStyle.loginButton}>ورود</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
