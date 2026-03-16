import { Offer } from '../../types/offer.ts';

type OfferGoodsProps = {
  goods: Offer['goods'];
};

function OfferGoods({goods}: OfferGoodsProps): JSX.Element {

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => (
          <li key={item} className="offer__inside-item">
            {item}
          </li>
        ))}

      </ul>
    </div>

  );
}

export default OfferGoods;
