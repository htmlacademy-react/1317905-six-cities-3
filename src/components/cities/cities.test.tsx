import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Cities from './cities';
import { changeCity } from '../../store/slices/ui-slice';
import { CITIES } from '../../const';

const mockStore = configureMockStore();

describe('Component: Cities', () => {
  it('should dispatch changeCity when city clicked', async () => {
    const user = userEvent.setup();
    const store = mockStore({
      ui: { city: 'Paris', sorting: 'popular', error: null },
    });

    render(
      <Provider store={store}>
        <Cities />
      </Provider>
    );

    const targetCity = CITIES[2];
    const cityElement = screen.getByText(targetCity);
    await user.click(cityElement);

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toBe(changeCity.type);
    expect(actions[0].payload).toBe(targetCity);
  });
});
