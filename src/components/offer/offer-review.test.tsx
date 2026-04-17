import { render, screen } from '@testing-library/react';
import OfferReview from './offer-review';
import { getRatingWidth } from '../../utils/utils';
import dayjs from 'dayjs';
import { OFFER_USER_AVATAR_SIZE } from '../../const';

vi.mock('../../utils/utils', () => ({
  getRatingWidth: vi.fn((rating) => `${rating * 20}%`),
}));

describe('Component: OfferReview', () => {
  const mockReview = {
    id: '1',
    comment: 'Great place, very cozy!',
    date: '2024-03-15T12:00:00Z',
    rating: 4.5,
    user: {
      name: 'John Doe',
      avatarUrl: 'img/avatar-john.jpg',
      isPro: false,
    },
  };

  it('should render user name, comment, rating, date', () => {
    render(<OfferReview review={mockReview} />);

    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();

    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();

    const formattedDate = dayjs(mockReview.date).format('MMMM YYYY');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('should render avatar with correct src, width, height', () => {
    render(<OfferReview review={mockReview} />);
    const img = screen.getByAltText('Reviews avatar');
    expect(img).toHaveAttribute('src', mockReview.user.avatarUrl);
    expect(img).toHaveAttribute('width', String(OFFER_USER_AVATAR_SIZE.WIDTH));
    expect(img).toHaveAttribute(
      'height',
      String(OFFER_USER_AVATAR_SIZE.HEIGHT),
    );
  });

  it('should call getRatingWidth with correct rating', () => {
    render(<OfferReview review={mockReview} />);
    expect(getRatingWidth).toHaveBeenCalledWith(mockReview.rating);
  });

  it('should render time element with correct dateTime attribute', () => {
    render(<OfferReview review={mockReview} />);
    const formattedDate = dayjs(mockReview.date).format('MMMM YYYY');
    const timeElement = screen.getByText(formattedDate).closest('time');
    expect(timeElement).toHaveAttribute(
      'dateTime',
      dayjs(mockReview.date).format('YYYY-MM-DD'),
    );
  });
});
