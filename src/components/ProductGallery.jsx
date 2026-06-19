import { Search } from 'lucide-react';

function ProductGallery({ images, productName }) {
  return (
    <section className="product-gallery" aria-label={`${productName} product images`}>
      <div className="image-stage">
        <img src={images[0].src} alt={images[0].alt} />
      </div>
      <div className="gallery-controls">
        <div className="gallery-dots" aria-label="Product image carousel position">
          {images.slice(0, 5).map((image, index) => (
            <span className={index === 0 ? 'active' : undefined} key={image.alt} />
          ))}
        </div>
        <button className="zoom-button">
          Zoom
          <Search size={23} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}

export default ProductGallery;
