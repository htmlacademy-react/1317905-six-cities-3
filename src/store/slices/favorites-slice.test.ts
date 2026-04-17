import { describe, it, expect } from 'vitest';
import favoritesReducer from './favorites-slice';
import { fetchFavoritesAction, toggleFavoriteAction, logoutAction } from '../api-actions';
import { OfferCard } from '../../types/offer';

describe('favorites-slice', () => {
  const initialState = { items: [], isLoading: false };

  it('should return initial state on unknown action', () => {
    expect(favoritesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('fetchFavoritesAction', () => {
    it('should set isLoading=true on pending', () => {
      const action = { type: fetchFavoritesAction.pending.type };
      const newState = favoritesReducer(initialState, action);
      expect(newState.isLoading).toBe(true);
    });

    it('should set items and isLoading=false on fulfilled', () => {
      const mockItems = [{ id: '1' }, { id: '2' }] as OfferCard[];
      const action = { type: fetchFavoritesAction.fulfilled.type, payload: mockItems };
      const newState = favoritesReducer(initialState, action);
      expect(newState.items).toEqual(mockItems);
      expect(newState.isLoading).toBe(false);
    });

    it('should set isLoading=false on rejected', () => {
      const action = { type: fetchFavoritesAction.rejected.type };
      const newState = favoritesReducer({ ...initialState, isLoading: true }, action);
      expect(newState.isLoading).toBe(false);
      expect(newState.items).toEqual([]);
    });
  });

  describe('toggleFavoriteAction', () => {
    it('should add item when status=true and item not present', () => {
      const existingItem = { id: '1' } as OfferCard;
      const newItem = { id: '2' } as OfferCard;
      const prevState = { items: [existingItem], isLoading: false };
      const action = {
        type: toggleFavoriteAction.fulfilled.type,
        payload: newItem,
        meta: { arg: { offerId: '2', status: true } },
      };
      const newState = favoritesReducer(prevState, action);
      expect(newState.items).toHaveLength(2);
      expect(newState.items).toContainEqual(newItem);
    });

    it('should not duplicate item when status=true but already present', () => {
      const existingItem = { id: '1' } as OfferCard;
      const prevState = { items: [existingItem], isLoading: false };
      const action = {
        type: toggleFavoriteAction.fulfilled.type,
        payload: existingItem,
        meta: { arg: { offerId: '1', status: true } },
      };
      const newState = favoritesReducer(prevState, action);
      expect(newState.items).toHaveLength(1);
    });

    it('should remove item when status=false', () => {
      const itemToRemove = { id: '1' } as OfferCard;
      const otherItem = { id: '2' } as OfferCard;
      const prevState = { items: [itemToRemove, otherItem], isLoading: false };
      const action = {
        type: toggleFavoriteAction.fulfilled.type,
        payload: itemToRemove,
        meta: { arg: { offerId: '1', status: false } },
      };
      const newState = favoritesReducer(prevState, action);
      expect(newState.items).toHaveLength(1);
      expect(newState.items).toContainEqual(otherItem);
    });
  });

  describe('logoutAction', () => {
    it('should reset to initial state on logoutAction.fulfilled', () => {
      const loggedInState = { items: [{ id: '1' } as OfferCard], isLoading: false };
      const action = { type: logoutAction.fulfilled.type };
      const newState = favoritesReducer(loggedInState, action);
      expect(newState).toEqual(initialState);
    });
  });
});
