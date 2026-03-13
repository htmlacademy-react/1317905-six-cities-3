import { AuthorizationStatus } from '../const';

export const getAuthStatus = () : AuthorizationStatus => AuthorizationStatus.Auth;

export function getRatingWidth(rating: number): string {
  return `${Math.round(rating) * 20}%`;
}

export const getOfferRoute = (id: string) => `/offer/${id}`;
