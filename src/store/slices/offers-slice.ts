import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferCard } from '../../types/offer';
import {
  fetchOffersAction,
  fetchFavoritesAction,
} from '../api-actions';

interface OffersState {
  items: OfferCard[];
  isLoading: boolean;
  error: string | null;
}

const initialState: OffersState = {
  items: [],
  isLoading: false,
  error: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<OfferCard[]>) => {
      state.items = action.payload;
    },
    updateOfferFavorite: (state, action: PayloadAction<OfferCard>) => {
      const index = state.items.findIndex(
        (offer) => offer.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to load offers';
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const favoriteIds = new Set(action.payload.map((fav) => fav.id));
        state.items = state.items.map((offer) => ({
          ...offer,
          isFavorite: favoriteIds.has(offer.id),
        }));
      });
  },
});

export const { setOffers, updateOfferFavorite } = offersSlice.actions;
export default offersSlice.reducer;
