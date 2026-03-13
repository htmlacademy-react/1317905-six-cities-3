import { Offer } from '../../types/offer.ts';
import { CardViewMode } from '../../const.ts';
import PlaceCard from '../../place-card/place-card.tsx';

type FavoritesPageProps = {
  offers: Offer[];
};

function FavoritesPage(props: FavoritesPageProps): JSX.Element {
  const { offers } = props;

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <>
      {/* */}
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map((offer) => (
                    <PlaceCard
                      key={offer.id}
                      offer={offer}
                      viewMode={CardViewMode.FavoritesView}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
