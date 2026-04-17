import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export function withHistory(component: JSX.Element, initialEntries?: string[]) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </MemoryRouter>
  );
}
