import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  setSorting,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setError,
  setUser,
  setDataLoadingError,
} from './action';

import {
  fetchOffersAction,
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchReviewsAction,
  postCommentAction,
} from './api-actions';

import { OfferCard, Offer } from '../types/offer';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';
import { CITIES, SORT_TYPES, AuthorizationStatus } from '../const';

export type AppState = {
  city: string;
  offers: OfferCard[];
  singleOffer: Offer | null;
  nearbyOffers: OfferCard[];
  sorting: string;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  reviews: Review[];
  isReviewsLoading: boolean;
  error: string | null;
  user: UserData | null;
  isDataLoading: string | null;
};

const initialState: AppState = {
  city: CITIES[0],
  offers: [],
  singleOffer: null,
  nearbyOffers: [],
  sorting: SORT_TYPES[0].value,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  isOfferLoading: false,
  reviews: [],
  isReviewsLoading: false,
  error: null,
  user: null,
  isDataLoading: null,
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
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingError, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.singleOffer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.isOfferLoading = false;
      state.singleOffer = null;
    })

    .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchNearbyOffersAction.rejected, (state) => {
      state.nearbyOffers = [];
    })
    .addCase(fetchReviewsAction.pending, (state) => {
      state.isReviewsLoading = true;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoading = false;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.reviews = [];
      state.isReviewsLoading = false;
    })
    .addCase(postCommentAction.fulfilled, (state, action) => {
      state.reviews.unshift(action.payload);
    })
    .addCase(postCommentAction.rejected, (state) => {
      state.error = 'Failed to post comment';
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
      state.isDataLoading = null;
    })
    .addCase(fetchOffersAction.fulfilled, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state, action) => {
      state.isOffersLoading = false;
      state.isDataLoading = action.error.message || 'Failed to load offers';
    });
});

export default reducer;
