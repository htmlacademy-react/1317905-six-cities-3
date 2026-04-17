import { render, screen } from '@testing-library/react';
import OfferGallery from './offer-gallery';
import { OFFER_GALLERY_MAX_IMAGES } from '../../const';

describe('Component: OfferGallery', () => {
  it('should render correct number of images when images count is less than max', () => {
    const mockImages = ['img1.jpg', 'img2.jpg'];
    render(<OfferGallery images={mockImages} />);
    const images = screen.getAllByAltText('Photo');
    expect(images).toHaveLength(mockImages.length);
  });

  it('should render no more than OFFER_GALLERY_MAX_IMAGES images', () => {
    const manyImages = Array.from({ length: 10 }, (_, i) => `img${i}.jpg`);
    render(<OfferGallery images={manyImages} />);
    const images = screen.getAllByAltText('Photo');
    expect(images.length).toBeLessThanOrEqual(OFFER_GALLERY_MAX_IMAGES);
    expect(images.length).toBe(OFFER_GALLERY_MAX_IMAGES);
  });

  it('should render images with correct src', () => {
    const mockImages = ['test.jpg'];
    render(<OfferGallery images={mockImages} />);
    const img = screen.getByAltText('Photo');
    expect(img).toHaveAttribute('src', 'test.jpg');
  });

  it('should render with correct class names', () => {
    const mockImages = ['img.jpg'];
    render(<OfferGallery images={mockImages} />);
    const container = document.querySelector('.offer__gallery');
    const imageWrapper = document.querySelector('.offer__image-wrapper');
    const img = document.querySelector('.offer__image');
    expect(container).toBeInTheDocument();
    expect(imageWrapper).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
