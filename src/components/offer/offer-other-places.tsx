import { OfferCard } from '../../types/offer.ts';
import PlaceCard from '../../place-card/place-card.tsx';
import { CardViewMode } from '../../const.ts';

type OfferOtherPlacesProps = {
  offerCards: OfferCard[];
  nearbyOffersCount: number;
};

function OfferOtherPlaces(props: OfferOtherPlacesProps): JSX.Element {

  const {offerCards, nearbyOffersCount} = props;

  const displayedNearOffers = offerCards.slice(0, nearbyOffersCount);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {displayedNearOffers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offerCard={offer}
              viewMode={CardViewMode.OffersView}
            />
          ))}

        </div>
      </section>
    </div>

  );
}

export default OfferOtherPlaces;
