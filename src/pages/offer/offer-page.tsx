import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer.ts';
import OfferGallery from './offer-gallery.tsx';
import OfferMap from './offer-map.tsx';
import OfferOtherPlaces from './offer-other-places.tsx';
import OfferInfo from './offer-info.tsx';

type OfferPageProps = {
  offers: Offer[];
  nearOffers: number;
}

function OfferPage({offers, nearOffers}: OfferPageProps): JSX.Element {

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
        offers={offers}
        nearOffers={nearOffers}
      />
    </main>

  );
}

export default OfferPage;
