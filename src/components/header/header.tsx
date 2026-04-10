import { useAppDispatch, useAppSelector } from '../../store/hooks'; // создайте хуки, если ещё нет
import { logoutAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import HeaderLogo from '../header/header-logo';

type HeaderProps = {
  withNav?: boolean;
};

function Header({ withNav = true }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { authorizationStatus, user } = useAppSelector((state) => state);
  const favoritesCount = useAppSelector((state) =>
    state.offers.filter((offer) => offer.isFavorite).length
  );

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (!withNav) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={
                          user?.avatarUrl
                            ? { backgroundImage: `url(${user.avatarUrl})`, backgroundSize: 'cover', borderRadius: '50%' }
                            : undefined
                        }
                      />
                      <span className="header__user-name user__name">
                        {user?.email || 'User'}
                      </span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <button
                      className="header__nav-link"
                      onClick={handleLogout}
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      <span className="header__signout">Sign out</span>
                    </button>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
