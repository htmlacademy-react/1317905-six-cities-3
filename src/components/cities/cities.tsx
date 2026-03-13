import { CITIES_LIST } from '../../const';

function Cities() : JSX.Element {
  const currentCity = 'Amsterdam';

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST.map((city) => (

        <li className ="locations__item" key={city.name}>
          <a className ={`locations__item-link tabs__item ${city.name === currentCity ? 'tabs__item--active' : ''}`}>
            <span>{city.name}</span>
          </a>
        </li>
      ))}

    </ul>

  );
}

export default Cities;
