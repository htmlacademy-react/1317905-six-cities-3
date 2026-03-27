import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Offer, OfferCard } from '../../types/offer.ts';
import { Review } from '../../types/review.ts';
import OfferGallery from '../../components/offer/offer-gallery.tsx';
import Map from '../../components/map/map.tsx';
import OfferNearbyPlaces from '../../components/offer/offer-nearby-places.tsx';
import OfferInfo from '../../components/offer/offer-info.tsx';

type OfferPageProps = {
  offers: Offer[];
  offerCards: OfferCard[];
  nearOffers: number;
  reviews: Review[];
};

function OfferPage({
  offers,
  offerCards,
  nearOffers,
  reviews,
}: OfferPageProps): JSX.Element {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentOffer = offers.find((o) => o.id === id);
  const currentOfferCard = offerCards.find((card) => card.id === id);

  const nearbyOffers = offerCards
    .filter((offer) => offer.id !== id)
    .slice(0, nearOffers);

  if (!currentOffer || !currentOfferCard) {
    return <div>Offer not found</div>;
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={currentOffer.images} />
        <OfferInfo offer={currentOffer} reviews={reviews} />
        <Map
          mapName="offer"
          offers={nearbyOffers}
          currentOffer={currentOfferCard}
        />
      </section>

      <OfferNearbyPlaces offers={nearbyOffers} />
    </main>
  );
}

export default OfferPage;
