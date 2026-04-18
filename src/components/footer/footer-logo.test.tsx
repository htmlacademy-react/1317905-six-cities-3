import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import FooterLogo from './footer-logo';
import { FOOTER_LOGO_SIZE } from '../../const';

describe('Component: FooterLogo', () => {
  it('should render link to main page with correct logo image', () => {
    const preparedComponent = withHistory(<FooterLogo />);
    render(preparedComponent);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');

    const img = screen.getByAltText('6 cities logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'img/logo.svg');
    expect(img).toHaveAttribute('width', String(FOOTER_LOGO_SIZE.WIDTH));
    expect(img).toHaveAttribute('height', String(FOOTER_LOGO_SIZE.HEIGHT));
  });
});
