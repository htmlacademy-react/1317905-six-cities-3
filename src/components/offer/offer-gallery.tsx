import { Offer } from '../../types/offer.ts';
import { OFFER_GALLERY_MAX_IMAGES } from '../../const.ts';

type OfferGalleryProps = {
  images: Offer['images'];
};

function OfferGallery({ images}: OfferGalleryProps): JSX.Element {

  const displayedImages = images.slice (0, OFFER_GALLERY_MAX_IMAGES);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        <div className="offer__gallery">
          {displayedImages.map((src) => (
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
