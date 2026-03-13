import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main/main-page.tsx';
import LoginPage from '../../pages/login/login-page.tsx';
import FavoritesPage from '../../pages/favorites/favorites-page.tsx';
import OfferPage from '../../pages/offer/offer-page.tsx';
import NotFoundScreenPage from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';
import { Offer } from '../../types/offer.ts';

type AppScreenProps = {
  cardsCount: number;
  offersCount: number;
  offers: Offer[];
  nearOffers: number;
}

function App({cardsCount, offersCount, offers, nearOffers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={
            <MainPage
              cardsCount={cardsCount}
              offersCount={offersCount}
              offers={offers}
            />
          }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesPage offers={offers}/></PrivateRoute>} />
          <Route path={AppRoute.Offer} element={
            <OfferPage
              offers={offers}
              nearOffers={nearOffers}
            />
          }
          />
          <Route path="*" element={<NotFoundScreenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
