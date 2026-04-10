import { createAction } from '@reduxjs/toolkit';
import { OfferCard} from '../types/offer';
import { UserData } from '../types/user-data';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('city/change');
export const loadOffers = createAction<OfferCard[]>('offers/load');
export const setSorting = createAction<string>('sorting/set');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
export const setDataLoadingError = createAction<string | null>('app/setDataError');
export const setUser = createAction<UserData | null>('user/set');

