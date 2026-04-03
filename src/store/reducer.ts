import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setSorting } from './action';
import { OfferCard } from '../types/offer';
import { CITIES, SORT_TYPES } from '../const';


export type AppState = {
  city: string;
  offers: OfferCard[];
  sorting: string;
};

const initialState: AppState = {
  city: CITIES[0],
  offers: [],
  sorting: SORT_TYPES[0].value,
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
    });
});

export default reducer;
