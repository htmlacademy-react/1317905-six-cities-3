import OfferReview from './offer-review.tsx';
import OfferReviewForm from './offer-review-form.tsx';
import { Review } from '../../types/review.ts';
import { Setting } from '../../const.ts';

type OfferReviewListProps = {
  reviews: Review[];
};

function OfferReviewList({ reviews }: OfferReviewListProps): JSX.Element {
  const displayedReviews = reviews.slice(0, Setting.MaxReviewsCount);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {displayedReviews.map((review) => (
          <OfferReview key={review.id} review={review} />
        ))}
      </ul>
      <OfferReviewForm />
    </section>
  );
}

export default OfferReviewList;
