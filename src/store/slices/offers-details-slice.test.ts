import { describe, it, expect } from 'vitest';
import offerDetailsReducer from './offer-details-slice';
import {
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchReviewsAction,
  postCommentAction,
  fetchFavoritesAction,
} from '../api-actions';
import { Offer } from '../../types/offer';
import { OfferCard } from '../../types/offer';
import { Review } from '../../types/review';

describe('offer-details-slice', () => {
  const initialState = {
    singleOffer: null,
    nearbyOffers: [],
    reviews: [],
    isOfferLoading: false,
    isReviewsLoading: false,
    error: null,
    errorNearby: null,
    errorReviews: null,
  };

  it('should return initial state', () => {
    expect(offerDetailsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('fetchOfferAction', () => {
    it('should set isOfferLoading=true and clear error on pending', () => {
      const action = { type: fetchOfferAction.pending.type };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.isOfferLoading).toBe(true);
      expect(newState.error).toBeNull();
    });

    it('should set singleOffer and isLoading=false on fulfilled', () => {
      const mockOffer = { id: '1' } as Offer;
      const action = { type: fetchOfferAction.fulfilled.type, payload: mockOffer };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.singleOffer).toEqual(mockOffer);
      expect(newState.isOfferLoading).toBe(false);
    });

    it('should set error and singleOffer=null on rejected', () => {
      const action = { type: fetchOfferAction.rejected.type, error: { message: 'Not found' } };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.isOfferLoading).toBe(false);
      expect(newState.error).toBe('Not found');
      expect(newState.singleOffer).toBeNull();
    });
  });

  describe('fetchNearbyOffersAction', () => {
    it('should set nearbyOffers on fulfilled', () => {
      const mockNearby = [{ id: '2' }] as OfferCard[];
      const action = { type: fetchNearbyOffersAction.fulfilled.type, payload: mockNearby };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.nearbyOffers).toEqual(mockNearby);
    });

    it('should set errorNearby and empty array on rejected', () => {
      const action = { type: fetchNearbyOffersAction.rejected.type, error: { message: 'Nearby error' } };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.nearbyOffers).toEqual([]);
      expect(newState.errorNearby).toBe('Nearby error');
    });
  });

  describe('fetchReviewsAction', () => {
    it('should set isReviewsLoading=true on pending', () => {
      const action = { type: fetchReviewsAction.pending.type };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.isReviewsLoading).toBe(true);
    });

    it('should set reviews and isLoading=false on fulfilled', () => {
      const mockReviews = [{ id: 'r1' }] as Review[];
      const action = { type: fetchReviewsAction.fulfilled.type, payload: mockReviews };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.reviews).toEqual(mockReviews);
      expect(newState.isReviewsLoading).toBe(false);
    });

    it('should set errorReviews and empty reviews on rejected', () => {
      const action = { type: fetchReviewsAction.rejected.type, error: { message: 'Reviews error' } };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.reviews).toEqual([]);
      expect(newState.errorReviews).toBe('Reviews error');
      expect(newState.isReviewsLoading).toBe(false);
    });
  });

  describe('postCommentAction', () => {
    it('should prepend new review on fulfilled', () => {
      const existingReviews = [{ id: 'old' }] as Review[];
      const newReview = { id: 'new' } as Review;
      const prevState = { ...initialState, reviews: existingReviews };
      const action = { type: postCommentAction.fulfilled.type, payload: newReview };
      const newState = offerDetailsReducer(prevState, action);
      expect(newState.reviews).toHaveLength(2);
      expect(newState.reviews[0]).toEqual(newReview);
    });

    it('should set error on rejected', () => {
      const action = { type: postCommentAction.rejected.type, error: { message: 'Post error' } };
      const newState = offerDetailsReducer(initialState, action);
      expect(newState.error).toBe('Failed to post comment');
    });
  });

  describe('fetchFavoritesAction.fulfilled', () => {
    it('should sync isFavorite for singleOffer and nearbyOffers', () => {
      const offer = { id: '1', isFavorite: false } as Offer;
      const nearby = [{ id: '2', isFavorite: false }] as OfferCard[];
      const favorites = [{ id: '1' }, { id: '2' }] as OfferCard[];
      const prevState = { ...initialState, singleOffer: offer, nearbyOffers: nearby };
      const action = { type: fetchFavoritesAction.fulfilled.type, payload: favorites };
      const newState = offerDetailsReducer(prevState, action);
      expect(newState.singleOffer?.isFavorite).toBe(true);
      expect(newState.nearbyOffers[0].isFavorite).toBe(true);
    });
  });
});
