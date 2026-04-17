import { render, screen } from '@testing-library/react';
import OfferGoods from './offer-goods';

describe('Component: OfferGoods', () => {
  it('should render empty list when goods array is empty', () => {
    render(<OfferGoods goods={[]} />);
    const listItems = screen.queryByRole('listitem');
    expect(listItems).not.toBeInTheDocument();
  });

  it('should render correct number of goods items', () => {
    const mockGoods = ['Wi-Fi', 'Kitchen', 'Parking'];
    render(<OfferGoods goods={mockGoods} />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(mockGoods.length);
  });

  it('should display each good text correctly', () => {
    const mockGoods = ['Wi-Fi', 'Heating', 'Washing machine'];
    render(<OfferGoods goods={mockGoods} />);

    mockGoods.forEach((good) => {
      expect(screen.getByText(good)).toBeInTheDocument();
    });
  });

  it('should have correct CSS classes', () => {
    const mockGoods = ['Wi-Fi'];
    render(<OfferGoods goods={mockGoods} />);

    const container = document.querySelector('.offer__inside');
    const title = document.querySelector('.offer__inside-title');
    const list = document.querySelector('.offer__inside-list');
    const listItem = document.querySelector('.offer__inside-item');

    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
  });
});
