import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';
import { offersMock } from './mocks/offers';
import { reviewsMock } from './mocks/reviews';
import { offerCardsMock } from './mocks/offer-cards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offersMock}
      reviews = {reviewsMock}
      offerCards = {offerCardsMock}
      nearbyOffersCount={Setting.NearOffers}
    />
  </React.StrictMode>
);
