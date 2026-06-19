function AboutFrames({ product }) {
  return (
    <section className="about-frames" aria-labelledby="about-title">
      <h2 id="about-title">
        <span>About the Frames</span>
      </h2>
      <div className="about-grid">
        <p className="frame-copy">{product.description}</p>
        <div className="frame-specs">
          <h3>{product.material}</h3>
          <div className="spec-table">
            <div>
              <strong>Frame Fit</strong>
              <span>{product.measurements.fit}</span>
            </div>
            <div>
              <strong>Measurements</strong>
              <span>{product.measurements.size}</span>
            </div>
          </div>
          <p className="measurement-note">
            These measurements mean lens width, bridge, and temple length in millimetres (mm). They can be found on the inside of the temple arm. If you already have a pair that you like, you can compare it to these measurements.
          </p>
          <p className="lens-note">
            Filter category 3 - General purpose sunglasses. High protection against sunglare. Good UV Protection. Not suitable for driving in twilight, at night or under dull conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutFrames;
