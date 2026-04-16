import {Link} from 'react-router-dom';
import { FOOTER_LOGO_SIZE } from '../../const';

function FooterLogo(): JSX.Element {
  return (
    <Link className="footer__logo-link" to="/">
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={FOOTER_LOGO_SIZE.WIDTH} height={FOOTER_LOGO_SIZE.HEIGHT} />
    </Link>
  );
}

export default FooterLogo;
