import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../store';
import PlaceCardList from '../../components/place-card/place-card-list';
import Map from '../../components/map/map';
import Cities from '../../components/cities/cities';

function MainPage(): JSX.Element {
  const [cardActive, setCardActive] = useState<string | null>(null);

  const city = useSelector((state: RootState) => state.city);
  const allOffers = useSelector((state: RootState) => state.offers);

  const filteredOffers = allOffers.filter((offer) => offer.city.name === city);
  const isEmpty = filteredOffers.length === 0;

  const handleCardHover = (id: string) => setCardActive(id);
  const handleCardLeave = () => setCardActive(null);

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
        </section>
      </div>
      <div className="cities">
        <div className={`cities__places-container container ${isEmpty ? 'cities__places-container--empty' : ''}`}>
          {isEmpty ? (
            <>
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {city}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </>
          ) : (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <PlaceCardList
                  offerCards={filteredOffers}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mapName="cities"
                  offers={filteredOffers}
                  activeOfferId={cardActive}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default MainPage;
