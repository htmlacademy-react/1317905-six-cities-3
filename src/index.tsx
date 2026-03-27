import React from 'react';
import ReactDOM from 'react-dom/client';
import { Setting } from './const';
import { offersMock } from './mocks/offers';
import { reviewsMock } from './mocks/reviews';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { loadOffers } from './store/action';
import { offerCardsMock } from './mocks/offer-cards';

store.dispatch(loadOffers(offerCardsMock));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offersMock}
        reviews={reviewsMock}
        offerCards={offerCardsMock}
        nearbyOffersCount={Setting.NearOffers}
      />
    </Provider>
  </React.StrictMode>,
);
