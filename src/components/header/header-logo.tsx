import {Link} from 'react-router-dom';
import { LOGO_SIZE } from '../../const';

function HeaderLogo(): JSX.Element {
  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={LOGO_SIZE.WIDTH} height={LOGO_SIZE.HEIGHT} />
    </Link>
  );
}

export default HeaderLogo;
