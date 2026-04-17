import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchFavoritesAction } from '../../store/api-actions';
import PlaceCard from '../../components/place-card/place-card';
import { CardViewMode } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { items: favorites, isLoading } = useAppSelector((state) => state.favorites);
  const isEmpty = favorites.length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const favoritesByCity = favorites.reduce((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as Record<string, typeof favorites>);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
          {isEmpty ? (
            <>
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </>
          ) : (
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(([cityName, cityOffers]) => (
                <li key={cityName} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {cityOffers.map((offer) => (
                      <PlaceCard
                        key={offer.id}
                        offerCard={offer}
                        viewMode={CardViewMode.FavoritesView}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;
