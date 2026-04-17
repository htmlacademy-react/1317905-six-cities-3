import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundScreenPage from './not-found-screen';

describe('Component: NotFoundScreenPage', () => {
  it('should render 404 message and link to main page', () => {
    render(
      <MemoryRouter>
        <NotFoundScreenPage />
      </MemoryRouter>
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Go to main page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
