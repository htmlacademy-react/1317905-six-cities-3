import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import {
  fetchOfferAction,
  fetchNearbyOffersAction,
} from '../../store/api-actions';
import { OfferCard } from '../../types/offer';

import OfferGallery from '../../components/offer/offer-gallery';
import OfferInfo from '../../components/offer/offer-info';
import Map from '../../components/map/map';
import OfferNearbyPlaces from '../../components/offer/offer-nearby-places';
import NotFoundScreenPage from '../not-found-screen/not-found-screen';


function OfferPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const singleOffer = useSelector((state: RootState) => state.singleOffer);
  const nearbyOffers = useSelector((state: RootState) => state.nearbyOffers);

  useEffect(() => {
    if (id) {

      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  if (!singleOffer) {
    return <NotFoundScreenPage />;
  }

  const currentOfferCard: OfferCard = {
    id: singleOffer.id,
    title: singleOffer.title,
    type: singleOffer.type,
    price: singleOffer.price,
    city: singleOffer.city,
    location: singleOffer.location,
    isFavorite: singleOffer.isFavorite,
    isPremium: singleOffer.isPremium,
    rating: singleOffer.rating,
    previewImage: singleOffer.images?.[0] || '',
  };

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={singleOffer.images} />
        <OfferInfo offer={singleOffer} reviews={[]} />
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
