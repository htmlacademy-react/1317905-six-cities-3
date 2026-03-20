import { CITIES} from '../../const';

function Cities(): JSX.Element {
  const currentCity = 'Amsterdam';

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city}>
          <a className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}>
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Cities;
