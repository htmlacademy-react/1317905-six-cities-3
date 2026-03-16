import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Offer, OfferCard } from '../../types/offer.ts';
import OfferGallery from '../../components/offer/offer-gallery.tsx';
import OfferMap from '../../components/offer/offer-map.tsx';
import OfferOtherPlaces from '../../components/offer/offer-other-places.tsx';
import OfferInfo from '../../components/offer/offer-info.tsx';

type OfferPageProps = {
  offers: Offer[];
  offerCards: OfferCard[];
  nearOffers: number;
}

function OfferPage({offers, offerCards, nearOffers}: OfferPageProps): JSX.Element {

  const {id} = useParams<{id:string}>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  const offer = offers.find((o) => o.id === id);
  if (!offer) {
    return <div>Offer not found</div>;
  }

  return (

    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={offer.images}/>
        <OfferInfo offers={offers}/>
        <OfferMap />
      </section>
      <OfferOtherPlaces
        offerCards={offerCards}
        nearbyOffersCount={nearOffers}
      />
    </main>

  );
}

export default OfferPage;
