import PlaceCard from '../place-card/place-card';
import { CardViewMode } from '../../const';
import { OfferCard } from '../../types/offer';
import ErrorMessage from '../error-message/error-message';

type OfferNearbyPlacesProps = {
  offers: OfferCard[];
  error?: string | null;
};

function OfferNearbyPlaces({
  offers,
  error,
}: OfferNearbyPlacesProps): JSX.Element | null {
  if (error) {
    return <ErrorMessage message="Failed to load nearby places" />;
  }
  if (offers.length === 0) {
    return null;
  }
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
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

export default OfferNearbyPlaces;
