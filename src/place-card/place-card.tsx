import {Link} from 'react-router-dom';
import { Offer } from '../types/offer';
import { CardViewMode } from '../const';
import { getRatingWidth, getOfferRoute } from '../utils/utils';

type ViewModeType = typeof CardViewMode[keyof typeof CardViewMode];

const cardClassMap = {
  [CardViewMode.CitiesView.name]: 'cities__card',
  [CardViewMode.FavoritesView.name]: 'favorites__card',
  [CardViewMode.OffersView.name]: 'near-places__card',
};

const imageWrapperClassMap = {
  [CardViewMode.CitiesView.name]: 'cities__image-wrapper',
  [CardViewMode.FavoritesView.name]: 'favorites__image-wrapper',
  [CardViewMode.OffersView.name]: 'near-places__image-wrapper',
};

type PlaceCardProps = {
  offer: Offer;
  viewMode?: ViewModeType;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function PlaceCard(props: PlaceCardProps) : JSX.Element {
  const {offer, viewMode = CardViewMode.CitiesView, onMouseEnter, onMouseLeave} = props;
  const {id, title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  const cardClass = cardClassMap[viewMode.name];
  const imageWrapperClass = imageWrapperClassMap[viewMode.name];

  return (
    <article
      className={`place-card ${cardClass}`}
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && viewMode.name !== CardViewMode.FavoritesView.name && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${imageWrapperClass}`}>
        <Link to={getOfferRoute(id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={viewMode.width}
            height={viewMode.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`place-card__info ${viewMode.name === CardViewMode.FavoritesView.name ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferRoute(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type ? type.charAt(0).toUpperCase() + type.slice(1) : 'Unknown'}</p>
      </div>
    </article>

  );
}

export default PlaceCard;
