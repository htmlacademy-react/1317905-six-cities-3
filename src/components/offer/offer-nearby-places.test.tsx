import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OfferNearbyPlaces from './offer-nearby-places';
import { OfferCard } from '../../types/offer';

vi.mock('../place-card/place-card', () => ({
  default: vi.fn(({ offerCard }: { offerCard: Pick<OfferCard, 'id' | 'title'> }) => (
    <div data-testid="mock-place-card">{offerCard.title}</div>
  )),
}));

describe('Component: OfferNearbyPlaces', () => {
  const mockOffers = [
    { id: '1', title: 'Nearby 1', city: { name: 'Paris' }, type: 'apartment', price: 100, location: { latitude: 0, longitude: 0, zoom: 10 }, isFavorite: false, isPremium: false, rating: 4, previewImage: '' },
    { id: '2', title: 'Nearby 2', city: { name: 'Paris' }, type: 'apartment', price: 100, location: { latitude: 0, longitude: 0, zoom: 10 }, isFavorite: false, isPremium: false, rating: 4, previewImage: '' },
  ] as OfferCard[];

  it('should render null when offers array is empty', () => {
    const { container } = render(<OfferNearbyPlaces offers={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render list of nearby places when offers are provided', () => {
    render(
      <MemoryRouter>
        <OfferNearbyPlaces offers={mockOffers} />
      </MemoryRouter>
    );
    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
    const cards = screen.getAllByTestId('mock-place-card');
    expect(cards).toHaveLength(2);
    expect(screen.getByText('Nearby 1')).toBeInTheDocument();
    expect(screen.getByText('Nearby 2')).toBeInTheDocument();
  });
});
