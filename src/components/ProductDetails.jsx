function ProductDetails({ product }) {
  return (
    <aside className="product-details">
      <div className="offer-block">
        <p>{product.offer}</p>
        <span>{product.offerNote}</span>
      </div>
      <h1>{product.name}</h1>
      <div className="swatches" aria-label="Available colors">
        {product.swatches.map((swatch) => (
          <button
            className={swatch.name === product.color ? 'selected' : undefined}
            type="button"
            key={swatch.name}
            style={{ '--swatch': swatch.value }}
            aria-label={swatch.name}
          />
        ))}
      </div>
      <p className="selected-color">
        <strong>Color:</strong> {product.color}
      </p>
      <div className="price-panel">
        <p>
          From <strong>{product.price}</strong>
        </p>
        <span>
          or ZIP it from <strong>{product.zipPrice}</strong> with <b>ZIP</b>
        </span>
      </div>
      <div className="purchase-actions">
        <button className="primary-button" type="button">Prescription</button>
        <button className="secondary-button" type="button">Book an eye test</button>
      </div>
    </aside>
  );
}

export default ProductDetails;
