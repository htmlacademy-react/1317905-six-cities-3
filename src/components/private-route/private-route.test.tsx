import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PrivateRoute from './private-route';
import { AuthorizationStatus, AppRoute } from '../../const';

describe('Component: PrivateRoute', () => {
  const createMockStore = (authStatus: AuthorizationStatus) =>
    configureStore({
      reducer: {
        user: () => ({ authorizationStatus: authStatus, user: null }),
      },
    });

  it('should render children when user is authenticated', () => {
    const store = createMockStore(AuthorizationStatus.Auth);
    const testChild = <div data-testid="protected-content">Secret Page</div>;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={<PrivateRoute>{testChild}</PrivateRoute>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });

  it('should redirect to login when user is not authenticated', () => {
    const store = createMockStore(AuthorizationStatus.NoAuth);
    const testChild = <div data-testid="protected-content">Secret Page</div>;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={<PrivateRoute>{testChild}</PrivateRoute>}
            />
            <Route
              path={AppRoute.Login}
              element={<div>Login Page</div>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
