import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <HeroImg />
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
