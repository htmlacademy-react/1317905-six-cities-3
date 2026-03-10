export const Setting = {
  CardsCount: 5,
  OffersCount: 312,
  IsAuth: true
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PAGE_CLASS_MAP: Record<string, string> = {
  [AppRoute.Main]: 'page--gray page--main',
  [AppRoute.Login]: 'page--gray page--login',
} as const;
