import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import {
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchReviewsAction,
} from '../../store/api-actions';

import { OfferCard } from '../../types/offer';

import OfferGallery from '../../components/offer/offer-gallery';
import OfferInfo from '../../components/offer/offer-info';
import Map from '../../components/map/map';
import OfferNearbyPlaces from '../../components/offer/offer-nearby-places';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreenPage from '../not-found-screen/not-found-screen';

import { Setting } from '../../const';

function OfferPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const singleOffer = useSelector((state: RootState) => state.singleOffer);
  const nearbyOffers = useSelector((state: RootState) => state.nearbyOffers);
  const reviews = useSelector((state: RootState) => state.reviews);
  const isOfferLoading = useSelector(
    (state: RootState) => state.isOfferLoading,
  );

  const lastFetchedId = useRef<string | null>(null);

  useEffect(() => {
    if (!id || lastFetchedId.current === id) {
      return;
    }

    lastFetchedId.current = id;

    dispatch(fetchOfferAction(id));
    dispatch(fetchNearbyOffersAction(id));
    dispatch(fetchReviewsAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

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
        <OfferInfo
          offer={singleOffer}
          reviews={reviews}
        />
        <Map
          mapName="offer"
          offers={nearbyOffers}
          currentOffer={currentOfferCard}
        />
      </section>

      <OfferNearbyPlaces offers={nearbyOffers.slice(0, Setting.NearOffers)} />
    </main>
  );
}

export default OfferPage;
