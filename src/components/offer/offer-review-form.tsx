import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { postCommentAction } from '../../store/api-actions';
import { AuthorizationStatus, REVIEW_CONSTANTS, REVIEW_STAR_SIZE } from '../../const';

type RatingValue = 1 | 2 | 3 | 4 | 5;

type OfferReviewFormProps = {
  offerId: string;
};

function OfferReviewForm({ offerId }: OfferReviewFormProps): JSX.Element | null {
  const [rating, setRating] = useState<RatingValue | null>(null);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  const handleRatingChange = (value: RatingValue) => {
    if (isSubmitting) {
      return;
    }
    setRating((prev) => (prev === value ? null : value));
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!rating || review.length < REVIEW_CONSTANTS.MIN_LENGTH || review.length > REVIEW_CONSTANTS.MAX_LENGTH) {
      return;
    }

    void (async () => {
      setIsSubmitting(true);
      setError(null);
      try {
        await dispatch(postCommentAction({ comment: review, rating, offerId })).unwrap();
        setRating(null);
        setReview('');
      } catch {
        setError('Failed to post comment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  const isFormValid =
    rating !== null &&
    review.length >= REVIEW_CONSTANTS.MIN_LENGTH &&
    review.length <= REVIEW_CONSTANTS.MAX_LENGTH &&
    !isSubmitting;

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  const ratingValues: RatingValue[] = [5, 4, 3, 2, 1];
  const ratingTitles: Record<RatingValue, string> = {
    5: 'perfect',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly',
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {ratingValues.map((value) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
              onChange={() => {}} // пустой, чтобы не было ошибок React
              onClick={() => handleRatingChange(value)}
              disabled={isSubmitting}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitles[value]}
              style={{ cursor: isSubmitting ? 'default' : 'pointer' }}
            >
              <svg className="form__star-image" width={REVIEW_STAR_SIZE.WIDTH} height={REVIEW_STAR_SIZE.HEIGHT}>
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
        disabled={isSubmitting}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        {error && <div className="reviews__error" style={{ color: 'red' }}>{error}</div>}
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
