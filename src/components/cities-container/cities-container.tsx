import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../store';
import PlaceCardList from '../../components/place-card/place-card-list';
import Map from '../../components/map/map';
import SortList from '../sort-list/sort-list';
import { sortOffers } from './sort-offers';

function CitiesContainer(): JSX.Element {
  const [cardActive, setCardActive] = useState<string | null>(null);

  const city = useSelector((state: RootState) => state.city);
  const allOffers = useSelector((state: RootState) => state.offers);
  const sorting = useSelector((state: RootState) => state.sorting);

  const filteredOffers = allOffers.filter((offer) => offer.city.name === city);

  const sortedOffers = sortOffers(filteredOffers, sorting);
  const isEmpty = sortedOffers.length === 0;

  const handleCardHover = (id: string) => setCardActive(id);
  const handleCardLeave = () => setCardActive(null);

  return (
    <div className="cities">
      <div
        className={`cities__places-container container ${isEmpty ? 'cities__places-container--empty' : ''}`}
      >
        {isEmpty ? (
          <>
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in{' '}
                  {city}
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </>
        ) : (
          <>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} {sortedOffers.length !== 1 ? 'places' : 'place'} to stay in {city}
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
