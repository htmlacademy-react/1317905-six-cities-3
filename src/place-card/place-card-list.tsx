
import PlaceCard from './place-card';
import { CardViewMode } from '../const';
import { Offer } from '../types/offer';

type PlaceCardListProps = {
  cardsCount: number;
  offers: Offer[];
  onMouseEnter: (id: string) =>void;
  onMouseLeave: () => void;
}

function PlaceCardList(props: PlaceCardListProps) : JSX.Element {

  const {offers, cardsCount, onMouseEnter, onMouseLeave} = props;

  const displayedOffers = offers.slice(0, cardsCount || offers.length);

  return (
    <div className="cities__places-list places__list tabs__content">
      {displayedOffers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          viewMode={CardViewMode.CitiesView}
          onMouseEnter = {() => onMouseEnter(offer.id)}
          onMouseLeave = {onMouseLeave}
        />
      ))}
    </div>

  );
}

export default PlaceCardList;
