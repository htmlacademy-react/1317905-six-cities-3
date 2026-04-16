import { Offer } from '../../types/offer.ts';
import { OFFER_HOST_AVATAR_SIZE } from '../../const.ts';

type OfferHostProps = {
  host: Offer['host'];
  description: Offer['description'];
};

function OfferHost({host, description}: OfferHostProps): JSX.Element {


  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''}  user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={host.avatarUrl} width={OFFER_HOST_AVATAR_SIZE.WIDTH} height={OFFER_HOST_AVATAR_SIZE.HEIGHT} alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {host.name}
        </span>
        {host.isPro && (
          <span className="offer__user-status">
          Pro
          </span>
        )}

      </div>
      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>

  );
}

export default OfferHost;
