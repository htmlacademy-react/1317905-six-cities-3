import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import SortList from './sort-list';
import { setSorting } from '../../store/slices/ui-slice';

const mockStore = configureMockStore();

describe('Component: SortList', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      ui: { sorting: 'popular', city: 'Paris', error: null },
    });
  });

  it('should open sort options on click', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <SortList />
      </Provider>
    );

    const sortType = screen.getByText('Popular');
    await user.click(sortType);
    const optionsList = document.querySelector('.places__options');
    expect(optionsList).toBeInTheDocument();
  });

  it('should dispatch setSorting when option selected', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <SortList />
      </Provider>
    );

    const sortType = screen.getByText('Popular');
    await user.click(sortType);

    const option = screen.getByText('Price: low to high');
    await user.click(option);

    const actions = store.getActions();
    expect(actions).toContainEqual(setSorting('priceLowToHigh'));
  });
});
