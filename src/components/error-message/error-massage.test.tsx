import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ErrorMessage from './error-message';

describe('Component: ErrorMessage', () => {
  it('should render nothing when no error', () => {
    const store = configureMockStore()({ ui: { error: null } });
    const { container } = render(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('should render error message from store', () => {
    const store = configureMockStore()({ ui: { error: 'Test error' } });
    render(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
    );
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('should render passed message prop instead of store error', () => {
    const store = configureMockStore()({ ui: { error: 'Global error' } });
    render(
      <Provider store={store}>
        <ErrorMessage message="Local error" />
      </Provider>
    );
    expect(screen.getByText('Local error')).toBeInTheDocument();
    expect(screen.queryByText('Global error')).not.toBeInTheDocument();
  });
});
