import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { OfferCard, Offer } from '../types/offer';
import { Review} from '../types/review';
import {
  loadOffers,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  setUser
} from './action';

import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';


export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  async (_, { dispatch }) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch(setError(null));
        resolve();
      }, TIMEOUT_SHOW_ERROR);
    });
  },
);


export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<OfferCard[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});


export const fetchOfferAction = createAsyncThunk<
  Offer,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { extra: api }) => {
  const { data } = await api.get<Offer>(APIRoute.Offer(id));
  return data;
});


export const fetchNearbyOffersAction = createAsyncThunk<
  OfferCard[],
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { extra: api }) => {
  const { data } = await api.get<OfferCard[]>(APIRoute.Nearby(id));
  return data;
});


export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUser(null));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUser(null));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Review[]>(APIRoute.Reviews(offerId));
    return data;
  },
);

export const postCommentAction = createAsyncThunk<Review, { comment: string; rating: number; offerId: string }, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(APIRoute.Reviews(offerId), { comment, rating });
    return data;
  }
);

