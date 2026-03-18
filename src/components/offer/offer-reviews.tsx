import OfferReviewForm from './offer-review-form.tsx';
import { Review } from '../../types/review.ts';
import { getRatingWidth } from '../../utils/utils.ts';
import dayjs from 'dayjs';
import { Setting } from '../../const.ts';

type OfferReviewProps = {
  reviews: Review[];
}


function OfferReviews({reviews}: OfferReviewProps): JSX.Element {

  const displayedReviews = reviews.slice(0, Setting.MaxReviewsCount);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {displayedReviews.map((review) => (

          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review?.user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {review?.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: getRatingWidth(review?.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review?.comment}
              </p>
              <time className="reviews__time" dateTime={dayjs(review?.date).format('YYYY-MM-DD')}>{dayjs(review?.date).format('MMMM YYYY')}</time>
            </div>
          </li>

        ))}

      </ul>
      <OfferReviewForm />
    </section>


  );
}

export default OfferReviews;
