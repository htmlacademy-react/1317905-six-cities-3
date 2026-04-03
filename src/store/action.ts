import { createAction } from '@reduxjs/toolkit';
import { OfferCard} from '../types/offer';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('city/change');
export const loadOffers = createAction<OfferCard[]>('offers/load');
export const setSorting = createAction<string>('sorting/set');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

