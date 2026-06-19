import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <section className="product-gallery" aria-label={`${productName} product images`}>
      <div className="image-stage">
        <button className="gallery-arrow gallery-arrow-left" type="button" onClick={showPreviousImage} aria-label="View previous product image">
          <ChevronLeft size={30} strokeWidth={1.8} />
        </button>
        <img src={activeImage.src} alt={activeImage.alt} />
        <button className="gallery-arrow gallery-arrow-right" type="button" onClick={showNextImage} aria-label="View next product image">
          <ChevronRight size={30} strokeWidth={1.8} />
        </button>
      </div>
      <div className="gallery-controls">
        <div className="gallery-dots" aria-label="Product image carousel position">
          {images.map((image, index) => (
            <button
              className={index === activeIndex ? 'active' : undefined}
              type="button"
              key={image.alt}
              onClick={() => setActiveIndex(index)}
              aria-label={`View product image ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
        <button className="zoom-button" type="button">
          Zoom
          <Search size={23} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}

export default ProductGallery;
