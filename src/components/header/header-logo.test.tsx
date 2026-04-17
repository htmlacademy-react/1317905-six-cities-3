import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import HeaderLogo from './header-logo';
import { LOGO_SIZE } from '../../const';

describe('Component: HeaderLogo', () => {
  it('should render link to main page with correct logo image', () => {
    const preparedComponent = withHistory(<HeaderLogo />);
    render(preparedComponent);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');

    const img = screen.getByAltText('6 cities logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'img/logo.svg');
    expect(img).toHaveAttribute('width', String(LOGO_SIZE.WIDTH));
    expect(img).toHaveAttribute('height', String(LOGO_SIZE.HEIGHT));
  });
});
