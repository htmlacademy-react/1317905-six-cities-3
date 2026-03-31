import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeCity } from '../../store/action';
import { CITIES } from '../../const';

function Cities(): JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector((state: RootState) => state.city);

  const handleCityClick = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
            onClick={() => handleCityClick(city)}
            style={{ cursor: 'pointer' }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Cities;
