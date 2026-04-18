import { useRef, FormEvent, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginAction } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute, CITIES } from '../../const';
import { changeCity } from '../../store/slices/ui-slice';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  const randomCity = useMemo (() => {
    const randomIndex = Math.floor(Math.random() * CITIES.length);
    return CITIES[randomIndex];
  }, []);

  const handleCityClick = () => {
    dispatch(changeCity(randomCity));
    navigate(AppRoute.Main);
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setError(null);

    if (loginRef.current && passwordRef.current) {
      const login = loginRef.current.value.trim();
      const password = passwordRef.current.value;

      if (!login || !password) {
        setError('Please fill in both fields');
        return;
      }

      void (async () => {
        try {
          await dispatch(loginAction({ login, password })).unwrap();
          navigate(AppRoute.Main);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Login failed. Check your credentials.');
          }
        }
      })();
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            {error && <div className="login__error" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" onClick={handleCityClick} style={{cursor: 'pointer'}}>
              <span>{randomCity}</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
