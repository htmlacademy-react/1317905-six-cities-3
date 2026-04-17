export const Setting = {
  NearOffers: 3,
  MaxReviewsCount: 10,
};

export const LOGO_SIZE = {
  WIDTH: 81,
  HEIGHT: 41,
} as const;

export const FOOTER_LOGO_SIZE = {
  WIDTH: 64,
  HEIGHT: 33,
} as const;

export const SORT_ARROW_SIZE = {
  WIDTH: 7,
  HEIGHT: 4,
} as const;

export const REVIEW_STAR_SIZE = {
  WIDTH: 37,
  HEIGHT: 33,
} as const;

export const OFFER_BOOKMARK_ICON_SIZE = {
  WIDTH: 31,
  HEIGHT: 33,
} as const;

export const OFFER_HOST_AVATAR_SIZE = {
  WIDTH: 74,
  HEIGHT: 74,
} as const;

export const OFFER_GALLERY_MAX_IMAGES = 6;

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
  Offer = '/offer/:id',
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

export const MAP_SETTINGS = {
  DEFAULT_ZOOM: 13,
  MAX_ZOOM_FIT_BOUNDS: 15,
  PADDING_FIT_BOUNDS: [50, 50] as [number, number],
  SCROLL_WHEEL_ZOOM: false,
  ZOOM_CONTROL: true,
  DOUBLE_CLICK_ZOOM: true,
} as const;

export const TILE_LAYER = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
} as const;

export const MARKER_CONFIG = {
  URL_DEFAULT: '/markup/img/pin.svg',
  URL_ACTIVE: '/markup/img/pin-active.svg',
  ICON_SIZE: { width: 27, height: 39 },
  ICON_ANCHOR: { x: 13, y: 39 },
} as const;


export const DEFAULT_LOCATION = {
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 12,
} as const;

export const SORT_TYPES = [
  { label: 'Popular', value: 'popular' },
  { label: 'Price: low to high', value: 'priceLowToHigh' },
  { label: 'Price: high to low', value: 'priceHighToLow' },
  { label: 'Top rated first', value: 'topRated' },
] as const;

export const APIRoute = {
  Offers: '/offers',
  Offer: (id: string) => `/offers/${id}`,
  Nearby: (id: string) => `/offers/${id}/nearby`,
  Reviews: (id: string) => `/comments/${id}`,
  Login: '/login',
  Logout: '/logout',
  Favorite: '/favorite',
  FavoriteStatus: (id: string, status: number) => `/favorite/${id}/${status}`,
} as const;

export const TIMEOUT_SHOW_ERROR = 2000;
