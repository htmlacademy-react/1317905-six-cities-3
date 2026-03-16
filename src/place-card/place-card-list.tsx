
import PlaceCard from './place-card';
import { CardViewMode } from '../const';
import { OfferCard } from '../types/offer';

type PlaceCardListProps = {
  offerCards: OfferCard[];
  onMouseEnter: (id: string) =>void;
  onMouseLeave: () => void;
}

function PlaceCardList(props: PlaceCardListProps) : JSX.Element {

  const {offerCards, onMouseEnter, onMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards.map((offer) => (
        <PlaceCard
          key={offer.id}
          offerCard={offer}
          viewMode={CardViewMode.CitiesView}
          onMouseEnter = {() => onMouseEnter(offer.id)}
          onMouseLeave = {onMouseLeave}
        />
      ))}
    </div>

  );
}

export default PlaceCardList;
