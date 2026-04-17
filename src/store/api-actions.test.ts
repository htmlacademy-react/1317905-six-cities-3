import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { createAPI } from '../services/api';
import {
  checkAuthAction,
  fetchFavoritesAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction,
  loginAction,
  logoutAction,
  postCommentAction,
  toggleFavoriteAction,
} from './api-actions';
import { APIRoute, AuthorizationStatus } from '../const';
import { RootState } from './index';
import { AuthData } from '../types/auth-data';
import { OfferCard, Offer } from '../types/offer';
import { Review } from '../types/review';
import { AxiosInstance } from 'axios';
import * as tokenStorage from '../services/token';
import { vi } from 'vitest';


export const extractActionsTypes = (actions: Action<string>[]) => actions.map((action) => action.type);


type AppThunkDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<RootState, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      offers: { items: [], isLoading: false, error: null },
      offerDetails: {
        singleOffer: null,
        nearbyOffers: [],
        reviews: [],
        isOfferLoading: false,
        isReviewsLoading: false,
        error: null,
        errorNearby: null,
        errorReviews: null,
      },
      favorites: { items: [], isLoading: false },
      user: { user: null, authorizationStatus: AuthorizationStatus.Unknown },
      ui: { city: 'Paris', sorting: 'popular', error: null },
    } as RootState);
    mockAxiosAdapter.reset();
  });

  describe('fetchOffersAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockOffers: OfferCard[] = [{ id: '1', title: 'Offer 1' } as OfferCard];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockOffer: Offer = { id: '42', title: 'Luxury' } as Offer;
      mockAxiosAdapter.onGet(APIRoute.Offer('42')).reply(200, mockOffer);

      await store.dispatch(fetchOfferAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offer('wrong')).reply(404);

      await store.dispatch(fetchOfferAction('wrong'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearbyOffersAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockNearby: OfferCard[] = [{ id: '2' } as OfferCard];
      mockAxiosAdapter.onGet(APIRoute.Nearby('42')).reply(200, mockNearby);

      await store.dispatch(fetchNearbyOffersAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onGet(APIRoute.Nearby('42')).reply(500);

      await store.dispatch(fetchNearbyOffersAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockReviews: Review[] = [{ id: 'r1', comment: 'Good' } as Review];
      mockAxiosAdapter.onGet(APIRoute.Reviews('42')).reply(200, mockReviews);

      await store.dispatch(fetchReviewsAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onGet(APIRoute.Reviews('42')).reply(403);

      await store.dispatch(fetchReviewsAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });

  describe('postCommentAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const newReview: Review = { id: 'new', comment: 'Nice!' } as Review;
      mockAxiosAdapter.onPost(APIRoute.Reviews('42')).reply(200, newReview);

      await store.dispatch(postCommentAction({ comment: 'Nice!', rating: 5, offerId: '42' }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onPost(APIRoute.Reviews('42')).reply(400);

      await store.dispatch(postCommentAction({ comment: 'Bad', rating: 1, offerId: '42' }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.rejected.type,
      ]);
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockUser = { email: 'test@test.com', token: '123' };
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, mockUser);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(401);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    const fakeUser: AuthData = { login: 'test@test.com', password: '123' };
    const fakeResponse = { token: 'secret', email: 'test@test.com' };

    it('should dispatch pending and fulfilled on success', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeResponse);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call saveToken once with the received token', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeResponse);
      const saveTokenSpy = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(saveTokenSpy).toHaveBeenCalledTimes(1);
      expect(saveTokenSpy).toHaveBeenCalledWith(fakeResponse.token);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should call dropToken once', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const dropTokenSpy = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(dropTokenSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchFavoritesAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockFavs: OfferCard[] = [{ id: 'fav1' } as OfferCard];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavs);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(500);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('toggleFavoriteAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const updatedOffer: OfferCard = { id: '1', isFavorite: true } as OfferCard;
      mockAxiosAdapter.onPost(APIRoute.FavoriteStatus('1', 1)).reply(200, updatedOffer);

      await store.dispatch(toggleFavoriteAction({ offerId: '1', status: true }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavoriteAction.pending.type,
        toggleFavoriteAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected on error', async () => {
      mockAxiosAdapter.onPost(APIRoute.FavoriteStatus('1', 0)).reply(400);

      await store.dispatch(toggleFavoriteAction({ offerId: '1', status: false }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavoriteAction.pending.type,
        toggleFavoriteAction.rejected.type,
      ]);
    });
  });
});
