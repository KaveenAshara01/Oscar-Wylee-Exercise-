import AboutFrames from './AboutFrames.jsx';
import Header from './Header.jsx';
import ProductDetails from './ProductDetails.jsx';
import ProductGallery from './ProductGallery.jsx';
import { product } from '../data/product.js';

function ProductPage() {
  return (
    <>
      <Header />
      <main className="product-page">
        <section className="mobile-intro" aria-label="Product summary">
          <h1>{product.name}</h1>
          <p>{product.offer}</p>
          <span>{product.offerNote}</span>
        </section>
        <section className="product-hero">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductDetails product={product} />
        </section>
        <AboutFrames product={product} />
      </main>
    </>
  );
}

export default ProductPage;
