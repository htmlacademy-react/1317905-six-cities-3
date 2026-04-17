import { render, screen } from '@testing-library/react';
import CitiesEmpty from './cities-empty';

describe('Component: CitiesEmpty', () => {
  it('should render empty message with given city name', () => {
    const city = 'Amsterdam';
    render(<CitiesEmpty city={city} />);
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(`in ${city}`, { exact: false })).toBeInTheDocument();
  });
});
