import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet, useLocation} from 'react-router-dom';
import { AppRoute, PAGE_CLASS_MAP} from '../../const';
import { useAppSelector } from '../../store/hooks';


type LayoutProps = {
  pageClass?: string;
};

function Layout({ pageClass}: LayoutProps) : JSX.Element {
  const location = useLocation();
  const favorites = useAppSelector((state) => state.favorites.items);
  const isEmptyFavorites = favorites.length === 0;

  let resolvedPageClass = pageClass ?? '';

  if (!resolvedPageClass) {
    resolvedPageClass = PAGE_CLASS_MAP[location.pathname] || '';
  }

  const isLoginPage = location.pathname === AppRoute.Login as string;
  const withNav = !isLoginPage;

  const isFavoritePage = location.pathname === AppRoute.Favorites as string;
  if (isFavoritePage && isEmptyFavorites) {
    resolvedPageClass = `${resolvedPageClass} page--favorites-empty`.trim();
  }

  return (
    <div className={`page ${resolvedPageClass ?? ''}`}>
      <Header withNav={withNav}/>
      <Outlet />
      {isFavoritePage && <Footer/>}
    </div>

  );
}

export default Layout;
