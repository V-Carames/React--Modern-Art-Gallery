import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div className="hero__content">
      <h1 className="hero__heading">Modern Art Gallery</h1>
      <div className="hero__info">
        <p className="hero__text">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>

        <Link to="location" className="hero__btn button">
          <span className="button__text">Our location</span>
          <span className="button__icon">
            <img src="src/assets/icons/icon-arrow-right.svg" alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
