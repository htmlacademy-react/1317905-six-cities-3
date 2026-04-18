import { render, screen } from '@testing-library/react';
import OfferReviewList from './offer-review-list';
import { Setting } from '../../const';
import { Review } from '../../types/review';

vi.mock('./offer-review', () => ({
  default: ({ review }: { review: Review }) => (
    <div data-testid="review-item">{review.comment}</div>
  ),
}));

vi.mock('./offer-review-form', () => ({
  default: ({ offerId }: { offerId: string }) => (
    <div data-testid="review-form">Review Form for {offerId}</div>
  ),
}));

vi.mock('../error-message/error-message', () => ({
  default: ({ message }: { message: string }) => (
    <div data-testid="error-message">{message}</div>
  ),
}));

describe('Component: OfferReviewList', () => {
  const mockReviews: Review[] = [
    {
      id: '1',
      comment: 'Great!',
      rating: 5,
      date: '2024-01-01',
      user: { name: 'John', avatarUrl: '', isPro: false },
    },
    {
      id: '2',
      comment: 'Nice place',
      rating: 4,
      date: '2024-01-02',
      user: { name: 'Jane', avatarUrl: '', isPro: true },
    },
    {
      id: '3',
      comment: 'Good',
      rating: 3,
      date: '2024-01-03',
      user: { name: 'Bob', avatarUrl: '', isPro: false },
    },
  ];
  const mockOfferId = 'offer123';

  it('should render error message when error prop is provided', () => {
    render(
      <OfferReviewList
        reviews={[]}
        offerId={mockOfferId}
        error="Failed to load"
      />,
    );
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
    expect(screen.queryByTestId('review-form')).not.toBeInTheDocument();
  });

  it('should render reviews and form when no error', () => {
    render(<OfferReviewList reviews={mockReviews} offerId={mockOfferId} />);
    const reviewItems = screen.getAllByTestId('review-item');
    expect(reviewItems).toHaveLength(
      Math.min(mockReviews.length, Setting.MaxReviewsCount),
    );
    expect(screen.getByTestId('review-form')).toBeInTheDocument();
    expect(
      screen.getByText(`Review Form for ${mockOfferId}`),
    ).toBeInTheDocument();
  });

  it('should limit displayed reviews to MaxReviewsCount', () => {
    const manyReviews = Array.from({ length: 15 }, (_, i) => ({
      id: String(i),
      comment: `Review ${i}`,
      rating: 5,
      date: '2024-01-01',
      user: { name: 'User', avatarUrl: '', isPro: false },
    }));
    render(<OfferReviewList reviews={manyReviews} offerId={mockOfferId} />);
    const reviewItems = screen.getAllByTestId('review-item');
    expect(reviewItems).toHaveLength(Setting.MaxReviewsCount);
  });

  it('should display correct total reviews count in title', () => {
    render(<OfferReviewList reviews={mockReviews} offerId={mockOfferId} />);
    const titleElement = screen.getByRole('heading', { name: /reviews/i });
    expect(titleElement).toHaveTextContent(`Reviews · ${mockReviews.length}`);
  });
});
