import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer.ts';
import OfferGoods from './offer-goods.tsx';
import OfferHost from './offer-host.tsx';
import OfferReviews from './offer-reviews.tsx';
import { getRatingWidth, getCapitalLetter } from '../../utils/utils.ts';

type OfferInfoProps = {
  offers: Offer[];
};

function OfferInfo(props: OfferInfoProps): JSX.Element {

  const {offers} = props;
  const {id} = useParams<{id:string}>();

  const offer = offers.find((o) => o.id === id);
  if (!offer) {
    return <div>Offer not found</div>;
  }

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
          <button className={`offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
            <svg className="offer__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
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
            {getCapitalLetter(offer.type)}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {offer.bedrooms} Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
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
        <OfferReviews />
      </div>
    </div>

  );
}

export default OfferInfo;
