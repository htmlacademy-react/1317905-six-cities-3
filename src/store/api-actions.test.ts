import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { createAPI } from '../services/api';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchReviewsAction,
  postCommentAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchFavoritesAction,
  toggleFavoriteAction,
} from './api-actions';
import { APIRoute, AuthorizationStatus } from '../const';
import { RootState } from './index';
import { AuthData } from '../types/auth-data';
import * as tokenStorage from '../services/token';
import { setUser, setAuthStatus } from './slices/user-slice';

type AppThunkDispatch = ThunkDispatch<
  RootState,
  ReturnType<typeof createAPI>,
  Action
>;

const extractActionsTypes = (actions: Action<string>[]) =>
  actions.map((action) => action.type);

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    RootState,
    Action<string>,
    AppThunkDispatch
  >(middleware);
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
      const mockOffers = [{ id: '1' }];
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
      const mockOffer = { id: '42' };
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
      const mockNearby = [{ id: '2' }];
      mockAxiosAdapter.onGet(APIRoute.Nearby('42')).reply(200, mockNearby);

      await store.dispatch(fetchNearbyOffersAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockReviews = [{ id: 'r1' }];
      mockAxiosAdapter.onGet(APIRoute.Reviews('42')).reply(200, mockReviews);

      await store.dispatch(fetchReviewsAction('42'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);
    });
  });

  describe('postCommentAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const newReview = { id: 'new' };
      mockAxiosAdapter.onPost(APIRoute.Reviews('42')).reply(200, newReview);

      await store.dispatch(
        postCommentAction({ comment: 'Nice', rating: 5, offerId: '42' }),
      );
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type,
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
        fetchFavoritesAction.pending.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call saveToken once with the received token', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeResponse);
      const saveTokenSpy = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(saveTokenSpy).toHaveBeenCalledTimes(1);
      expect(saveTokenSpy).toHaveBeenCalledWith(fakeResponse.token);
      saveTokenSpy.mockRestore();
    });
  });

  describe('logoutAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        setUser.type,
        setAuthStatus.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should call dropToken once', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const dropTokenSpy = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(dropTokenSpy).toHaveBeenCalledTimes(1);
      dropTokenSpy.mockRestore();
    });
  });

  describe('fetchFavoritesAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const mockFavs = [{ id: 'fav1' }];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavs);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);
    });
  });

  describe('toggleFavoriteAction', () => {
    it('should dispatch pending and fulfilled on success', async () => {
      const updatedOffer = { id: '1', isFavorite: true };
      mockAxiosAdapter
        .onPost(APIRoute.FavoriteStatus('1', 1))
        .reply(200, updatedOffer);

      await store.dispatch(
        toggleFavoriteAction({ offerId: '1', status: true }),
      );
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavoriteAction.pending.type,
        toggleFavoriteAction.fulfilled.type,
      ]);
    });
  });
});
