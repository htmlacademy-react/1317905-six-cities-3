// src/components/app/app.tsx
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main-page';
import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFoundScreenPage from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { Offer } from '../../types/offer';
import { OfferCard } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  offers: Offer[];
  offerCards: OfferCard[];
  reviews: Review[];
  nearbyOffersCount: number;
};

function App({ offers, offerCards, reviews, nearbyOffersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offerCards={offerCards} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                offers={offers}
                offerCards={offerCards}
                nearOffers={nearbyOffersCount}
                reviews={reviews}
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
