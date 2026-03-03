import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main/main-page.tsx';
import LoginPage from '../../pages/login/login-page.tsx';
import FavoritesPage from '../../pages/favorites/favorites-page.tsx';
import OfferPage from '../../pages/offer/offer-page.tsx';
import NotFoundScreenPage from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppScreenProps = {
  cardsCount: number;
  offersCount: number;
  isAuth: boolean;
}

function App({cardsCount, offersCount, isAuth }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              cardsCount={cardsCount}
              offersCount={offersCount}
              isAuth={isAuth}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage isAuth={isAuth} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage isAuth={isAuth} />}
        />
        <Route
          path="*"
          element={<NotFoundScreenPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
