import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setSorting, requireAuthorization, setError} from './action';
import { OfferCard } from '../types/offer';
import { CITIES, SORT_TYPES, AuthorizationStatus } from '../const';


export type AppState = {
  city: string;
  offers: OfferCard[];
  sorting: string;
  authorizationStatus: string;
  isOffersLoading: boolean;
  error: string | null;
};

const initialState: AppState = {
  city: CITIES[0],
  offers: [],
  sorting: SORT_TYPES[0].value,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.sorting = SORT_TYPES[0].value;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;
