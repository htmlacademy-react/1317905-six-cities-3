import { City } from './types/city';

export const Setting = {
  IsAuth: true,
  NearOffers: 3,
  MaxReviewsCount: 10
};


export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;


export const CITIES_LIST: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    },
  },
] ;

export const AMSTERDAM_LOCATIONS = [
  { latitude: 52.3909553943508, longitude: 4.85309666406198 },
  { latitude: 52.3609553943508, longitude: 4.85309666406198 },
  { latitude: 52.3909553943508, longitude: 4.929309666406198 },
  { latitude: 52.3809553943508, longitude: 4.939309666406198 },
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


export const CardViewMode = {
  CitiesView: {
    name: 'cities',
    width: 260,
    height: 200,
  },
  FavoritesView: {
    name: 'favorites',
    width: 150,
    height: 110,
  },
  OffersView: {
    name: 'near-places',
    width: 260,
    height: 200,
  },
} as const;

export const cardClassMap = {
  [CardViewMode.CitiesView.name]: 'cities__card',
  [CardViewMode.FavoritesView.name]: 'favorites__card',
  [CardViewMode.OffersView.name]: 'near-places__card',
};

export const imageWrapperClassMap = {
  [CardViewMode.CitiesView.name]: 'cities__image-wrapper',
  [CardViewMode.FavoritesView.name]: 'favorites__image-wrapper',
  [CardViewMode.OffersView.name]: 'near-places__image-wrapper',
};

export const REVIEW_CONSTANTS = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
} as const;

export enum MapName {
  Cities = 'cities',
  Offers = 'offer',
}


export const MARKERS = {
  URL_MARKER_DEFAULT: '/markup/img/pin.svg',
  URL_MARKER_ACTIVE: '/markup/img/pin-active.svg',
} as const;

export const SORT_TYPES = [
  { label: 'Popular', value: 'popular' },
  { label: 'Price: low to high', value: 'priceLowToHigh' },
  { label: 'Price: high to low', value: 'priceHighToLow' },
  { label: 'Top rated first', value: 'topRated' },
] as const;


export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

