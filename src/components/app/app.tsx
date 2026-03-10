import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main/main-page.tsx';
import LoginPage from '../../pages/login/login-page.tsx';
import FavoritesPage from '../../pages/favorites/favorites-page.tsx';
import OfferPage from '../../pages/offer/offer-page.tsx';
import NotFoundScreenPage from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';

type AppScreenProps = {
  cardsCount: number;
  offersCount: number;
}

function App({cardsCount, offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={
            <MainPage
              cardsCount={cardsCount}
              offersCount={offersCount}
            />
          }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesPage /></PrivateRoute>} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<NotFoundScreenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
