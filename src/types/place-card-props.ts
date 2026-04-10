import { OfferCard } from './offer';
import { CardViewMode } from '../const';

export type ViewModeType = typeof CardViewMode[keyof typeof CardViewMode];

export type PlaceCardProps = {
  offerCard: OfferCard;
  viewMode?: ViewModeType;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
};
