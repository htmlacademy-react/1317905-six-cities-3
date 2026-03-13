import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer.ts';
import OfferGoods from './offer-goods.tsx';
import OfferHost from './offer-host.tsx';
import OfferReviewForm from './offer-review-form.tsx';
import { getRatingWidth } from '../../utils/utils.ts';

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
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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
            {offer.type
              ? offer.type.charAt(0).toUpperCase() + offer.type.slice(1)
              : 'Unknown'}
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
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                        Max
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
              </div>
            </li>
          </ul>
          <OfferReviewForm />
        </section>
      </div>
    </div>

  );
}

export default OfferInfo;
