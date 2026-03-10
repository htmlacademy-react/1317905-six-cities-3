import Header from '../header/header';
import { Outlet, useLocation} from 'react-router-dom';
import { AppRoute, PAGE_CLASS_MAP} from '../../const';


type LayoutProps = {
  pageClass?: string;

};

function Layout({ pageClass}: LayoutProps) : JSX.Element {
  const location = useLocation();

  let resolvedPageClass = pageClass ?? '';

  if (!resolvedPageClass) {
    resolvedPageClass = PAGE_CLASS_MAP[location.pathname] || '';
  }

  const isLoginPage = location.pathname === AppRoute.Login as string;
  const withNav = !isLoginPage;

  return (
    <div className={`page ${resolvedPageClass ?? ''}`}>
      <Header withNav={withNav}/>
      <Outlet />

    </div>

  );
}

export default Layout;
