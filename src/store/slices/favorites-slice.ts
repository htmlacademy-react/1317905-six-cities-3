import { createSlice } from '@reduxjs/toolkit';
import { OfferCard } from '../../types/offer';
import { fetchFavoritesAction, toggleFavoriteAction, logoutAction } from '../api-actions';

interface FavoritesState {
  items: OfferCard[];
  isLoading: boolean;
}

const initialState: FavoritesState = {
  items: [],
  isLoading: false,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const updated = action.payload;
        const { status } = action.meta.arg as { offerId: string; status: boolean };
        if (status) {
          if (!state.items.some((item) => item.id === updated.id)) {
            state.items.push(updated);
          }
        } else {
          state.items = state.items.filter((item) => item.id !== updated.id);
        }
      })
      .addCase(logoutAction.fulfilled, () => initialState);
  },
});

export default favoritesSlice.reducer;
