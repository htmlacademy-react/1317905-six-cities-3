import { City } from './city';
import { Location } from './location';
import { Host } from './host';

type OfferTemplate = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;

};


export type OfferCard = OfferTemplate & {
  previewImage: string;
};

export type Offer = OfferTemplate & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

