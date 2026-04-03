import { OfferCard } from '../../types/offer';

export const sortOffers = (offers: OfferCard[], sortType: string) => {
  const copyOffers = [...offers];
  switch(sortType) {
    case 'priceLowToHigh':
      return copyOffers.sort((a , b) => a.price - b.price);
    case 'priceHighToLow':
      return copyOffers.sort((a , b) => b.price - a.price);
    case 'topRated':
      return copyOffers.sort((a , b) => b.rating - a.rating);
    default:
      return copyOffers;
  }
};
