import { render, screen } from '@testing-library/react';
import OfferHost from './offer-host';
import { OFFER_HOST_AVATAR_SIZE } from '../../const';

describe('Component: OfferHost', () => {
  const mockHostPro = {
    name: 'John Doe',
    avatarUrl: 'img/avatar-john.jpg',
    isPro: true,
  };
  const mockHostNotPro = {
    name: 'Jane Smith',
    avatarUrl: 'img/avatar-jane.jpg',
    isPro: false,
  };
  const mockDescription = 'Nice apartment with a beautiful view.';

  it('should render host name and description', () => {
    render(<OfferHost host={mockHostNotPro} description={mockDescription} />);

    expect(screen.getByText(mockHostNotPro.name)).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it('should render avatar with correct src, width, height', () => {
    render(<OfferHost host={mockHostNotPro} description={mockDescription} />);
    const img = screen.getByAltText('Host avatar');
    expect(img).toHaveAttribute('src', mockHostNotPro.avatarUrl);
    expect(img).toHaveAttribute('width', String(OFFER_HOST_AVATAR_SIZE.WIDTH));
    expect(img).toHaveAttribute('height', String(OFFER_HOST_AVATAR_SIZE.HEIGHT));
  });

  it('should show "Pro" status when host is pro', () => {
    render(<OfferHost host={mockHostPro} description={mockDescription} />);
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('should not show "Pro" status when host is not pro', () => {
    render(<OfferHost host={mockHostNotPro} description={mockDescription} />);
    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
  });

  it('should have correct CSS classes for pro avatar wrapper', () => {
    const { container } = render(<OfferHost host={mockHostPro} description={mockDescription} />);
    const avatarWrapper = container.querySelector('.offer__avatar-wrapper');
    expect(avatarWrapper).toHaveClass('offer__avatar-wrapper--pro');
  });

  it('should not have pro CSS class when host is not pro', () => {
    const { container } = render(<OfferHost host={mockHostNotPro} description={mockDescription} />);
    const avatarWrapper = container.querySelector('.offer__avatar-wrapper');
    expect(avatarWrapper).not.toHaveClass('offer__avatar-wrapper--pro');
  });

  it('should render all required sections', () => {
    render(<OfferHost host={mockHostNotPro} description={mockDescription} />);
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText(mockHostNotPro.name)).toBeInTheDocument();
    expect(screen.getByAltText('Host avatar')).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });
});
