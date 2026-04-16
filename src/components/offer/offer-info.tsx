import { Offer } from '../../types/offer.ts';
import { Review } from '../../types/review.ts';
import OfferGoods from './offer-goods.tsx';
import OfferHost from './offer-host.tsx';
import OfferReviewList from './offer-review-list.tsx';
import { getRatingWidth, capitalizeFirstLetter } from '../../utils/utils.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavoriteAction } from '../../store/api-actions';
import { OFFER_BOOKMARK_ICON_SIZE } from '../../const.ts';

type OfferInfoProps = {
  offer: Offer;
  reviews: Review[];
};

function OfferInfo(props: OfferInfoProps): JSX.Element {
  const { offer, reviews } = props;
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) =>
    state.favorites.items.some((item) => item.id === offer.id)
  );

  const handleFavoriteClick = () => {
    dispatch(toggleFavoriteAction({ offerId: offer.id, status: !isFavorite }));
  };

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offer.isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">{offer.title}</h1>
          <button
            className={`offer__bookmark-button ${isFavorite ? 'offer__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="offer__bookmark-icon" width={OFFER_BOOKMARK_ICON_SIZE.WIDTH} height={OFFER_BOOKMARK_ICON_SIZE.HEIGHT}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: getRatingWidth(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {capitalizeFirstLetter(offer.type)}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {offer.bedrooms} {offer.bedrooms !== 1 ? 'Bedrooms' : 'Bedroom'}
          </li>
          <li className="offer__feature offer__feature--adults">
            Max {offer.maxAdults} {offer.maxAdults !== 1 ? 'adults' : 'adult'}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{offer.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <OfferGoods goods={offer.goods} />
        <OfferHost host={offer.host} description={offer.description} />
        <OfferReviewList reviews={reviews} offerId={offer.id} />
      </div>
    </div>
  );
}

export default OfferInfo;
