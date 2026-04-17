import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import uiReducer from './slices/ui-slice';
import offersReducer from './slices/offers-slice';
import offerDetailsReducer from './slices/offer-details-slice';
import userReducer from './slices/user-slice';
import favoritesReducer from './slices/favorites-slice';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    offers: offersReducer,
    offerDetails: offerDetailsReducer,
    user: userReducer,
    favorites : favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
