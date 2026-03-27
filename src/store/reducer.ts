import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { OfferCard } from '../types/offer';
import { CITIES } from '../const';


export type AppState = {
  city: string;
  offers: OfferCard[];
};

const initialState: AppState = {
  city: CITIES[0],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
