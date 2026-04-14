import { Offer } from '../../types/offer.ts';
import { Review } from '../../types/review.ts';
import OfferGoods from './offer-goods.tsx';
import OfferHost from './offer-host.tsx';
import OfferReviewList from './offer-review-list.tsx';
import { getRatingWidth, capitalizeFirstLetter } from '../../utils/utils.ts';
import FavoriteButton from '../favorite-button/favorite-button.tsx';

type OfferInfoProps = {
  offer: Offer;
  reviews: Review[];
};

function OfferInfo(props: OfferInfoProps): JSX.Element {

  const {offer, reviews} = props;


  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offer.isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {offer.title}
          </h1>
          <FavoriteButton
            offerId={offer.id}
            isFavorite={offer.isFavorite}
            className="offer__bookmark"
            iconSize={{ width: 31, height: 33 }}
          />
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: getRatingWidth(offer.rating)}}></span>
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
        <OfferGoods goods={offer.goods}/>
        <OfferHost
          host={offer.host}
          description={offer.description}
        />
        <OfferReviewList
          reviews={reviews}
          offerId={offer.id}
        />
      </div>
    </div>

  );
}

export default OfferInfo;
