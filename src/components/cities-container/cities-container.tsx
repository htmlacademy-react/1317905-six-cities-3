import { useSelector } from 'react-redux';
import { useState, useMemo, useCallback } from 'react';
import { RootState } from '../../store';
import PlaceCardList from '../../components/place-card/place-card-list';
import CitiesEmpty from '../cities-empty/cities-empty';
import Map from '../../components/map/map';
import SortList from '../sort-list/sort-list';
import { sortOffers } from './sort-offers';

function CitiesContainer(): JSX.Element {
  const [cardActive, setCardActive] = useState<string | null>(null);

  const city = useSelector((state: RootState) => state.ui.city);
  const allOffers = useSelector((state: RootState) => state.offers.items);
  const sorting = useSelector((state: RootState) => state.ui.sorting);

  const filteredOffers = useMemo(() => allOffers.filter((offer) => offer.city.name === city), [allOffers, city]);

  const sortedOffers = useMemo(() => sortOffers(filteredOffers, sorting), [filteredOffers, sorting]);
  const isEmpty = sortedOffers.length === 0;

  const handleCardHover = useCallback((id: string) => {
    setCardActive(id);
  }, []);
  const handleCardLeave = useCallback(() => {
    setCardActive(null);
  },[]);

  return (
    <div className="cities">
      <div
        className={`cities__places-container container ${isEmpty ? 'cities__places-container--empty' : ''}`}
      >
        {isEmpty ? (
          <CitiesEmpty city={city} />
        ) : (
          <>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length}{' '}
                {sortedOffers.length !== 1 ? 'places' : 'place'} to stay in{' '}
                {city}
              </b>
              <SortList />
              <PlaceCardList
                offerCards={sortedOffers}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              />
            </section>
            <div className="cities__right-section">
              <Map
                mapName="cities"
                offers={sortedOffers}
                activeOfferId={cardActive}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CitiesContainer;
