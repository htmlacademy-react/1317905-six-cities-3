
import { Offer } from '../../types/offer.ts';

type OfferGalleryProps = {
  images: Offer['images'];
};

function OfferGallery({ images}: OfferGalleryProps): JSX.Element {

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        <div className="offer__gallery">
          {images.map((src) => (
            <div key={src} className="offer__image-wrapper">
              <img src={src} alt='Photo' className="offer__image" />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default OfferGallery;
