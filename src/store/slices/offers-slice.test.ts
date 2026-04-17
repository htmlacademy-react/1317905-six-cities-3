import { describe, it, expect } from 'vitest';
import offersReducer, { setOffers, updateOfferFavorite } from './offers-slice';
import { fetchOffersAction, fetchFavoritesAction } from '../api-actions';
import { OfferCard } from '../../types/offer';

describe('offers-slice', () => {
  const initialState = { items: [], isLoading: false, error: null };

  it('should return initial state', () => {
    expect(offersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setOffers', () => {
    const mockOffers = [{ id: '1' }, { id: '2' }] as OfferCard[];
    const newState = offersReducer(initialState, setOffers(mockOffers));
    expect(newState.items).toEqual(mockOffers);
  });

  it('should handle updateOfferFavorite', () => {
    const oldOffer = { id: '1', isFavorite: false } as OfferCard;
    const updatedOffer = { id: '1', isFavorite: true } as OfferCard;
    const prevState = { ...initialState, items: [oldOffer, { id: '2' } as OfferCard] };
    const newState = offersReducer(prevState, updateOfferFavorite(updatedOffer));
    expect(newState.items[0].isFavorite).toBe(true);
  });

  describe('fetchOffersAction', () => {
    it('should set isLoading=true on pending', () => {
      const newState = offersReducer(initialState, { type: fetchOffersAction.pending.type });
      expect(newState.isLoading).toBe(true);
      expect(newState.error).toBeNull();
    });

    it('should set items and isLoading=false on fulfilled', () => {
      const mockOffers = [{ id: '1' }] as OfferCard[];
      const action = { type: fetchOffersAction.fulfilled.type, payload: mockOffers };
      const newState = offersReducer(initialState, action);
      expect(newState.items).toEqual(mockOffers);
      expect(newState.isLoading).toBe(false);
    });

    it('should set error and isLoading=false on rejected', () => {
      const action = { type: fetchOffersAction.rejected.type, error: { message: 'Fail' } };
      const newState = offersReducer(initialState, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.error).toBe('Fail');
    });
  });

  describe('fetchFavoritesAction.fulfilled', () => {
    it('should sync isFavorite flags with favorites list', () => {
      const offers = [
        { id: '1', isFavorite: false },
        { id: '2', isFavorite: false },
      ] as OfferCard[];
      const favorites = [{ id: '1' }] as OfferCard[];
      const prevState = { ...initialState, items: offers };
      const action = { type: fetchFavoritesAction.fulfilled.type, payload: favorites };
      const newState = offersReducer(prevState, action);
      expect(newState.items[0].isFavorite).toBe(true);
      expect(newState.items[1].isFavorite).toBe(false);
    });
  });
});
