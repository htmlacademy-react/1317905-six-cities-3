// src/components/footer/footer.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render footer container', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = document.querySelector('.footer.container');
    expect(footer).toBeInTheDocument();
  });

  it('should render logo image', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const img = screen.getByAltText('6 cities logo');
    expect(img).toBeInTheDocument();
  });
});
