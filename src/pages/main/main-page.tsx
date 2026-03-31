import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Cities from '../../components/cities/cities';
import CitiesContainer from '../../components/cities-container/cities-container';

function MainPage(): JSX.Element {

  const city = useSelector((state: RootState) => state.city);
  const allOffers = useSelector((state: RootState) => state.offers);

  const filteredOffers = allOffers.filter((offer) => offer.city.name === city);
  const isEmpty = filteredOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
        </section>
      </div>
      <CitiesContainer/>
    </main>
  );
}

export default MainPage;
