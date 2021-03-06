import KnightCupLogo from './svgs/KnightCupLogo';

function Frame({ image, children }) {
  return (
    <section className="frame-grid">
      <div className="main-section">
        <div className="head">
          <KnightCupLogo />
          <h2>Redberry Knight Cup</h2>
        </div>
        <div className="img-box">
          <img
            className="main-img"
            src={image}
            alt={Object.keys({ image })[0]}
          />
        </div>
        {children[0]}
      </div>
      <div>{children[1]}</div>
    </section>
  );
}

export default Frame;
