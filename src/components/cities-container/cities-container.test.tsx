import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import CitiesContainer from './cities-container';
import { setSorting } from '../../store/slices/ui-slice';

vi.mock('../../components/place-card/place-card-list', () => ({
  default: vi.fn(() => <div data-testid="place-card-list" />),
}));
vi.mock('../../components/map/map', () => ({
  default: vi.fn(() => <div data-testid="map" />),
}));
vi.mock('../cities-empty/cities-empty', () => ({
  default: vi.fn(() => <div data-testid="cities-empty" />),
}));


const mockStore = configureMockStore();

describe('Component: CitiesContainer', () => {
  const mockOffers = [
    { id: '1', city: { name: 'Paris' }, title: 'Offer 1' },
    { id: '2', city: { name: 'Paris' }, title: 'Offer 2' },
  ];
  const initialStoreState = {
    ui: { city: 'Paris', sorting: 'popular' },
    offers: { items: mockOffers },
  };

  it('should dispatch setSorting when sort option is clicked', async () => {
    const user = userEvent.setup();
    const store = mockStore(initialStoreState);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CitiesContainer />
        </MemoryRouter>
      </Provider>
    );
    const sortType = screen.getByText('Popular');
    await user.click(sortType);
    const priceOption = screen.getByText('Price: low to high');
    await user.click(priceOption);
    const actions = store.getActions();
    expect(actions).toContainEqual(setSorting('priceLowToHigh'));
  });
});
