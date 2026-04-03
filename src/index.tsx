import React from 'react';
import ReactDOM from 'react-dom/client';
import { Setting } from './const';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        nearbyOffersCount={Setting.NearOffers}
      />
      <ErrorMessage />
    </Provider>
  </React.StrictMode>,
);
