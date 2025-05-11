function HeroImg() {
  return (
    <picture class="hero__picture">
      <source
        media="(min-width: 68.75rem)"
        srcset="src/assets/images/desktop/image-hero.jpg"
      />
      <source
        media="(min-width: 43.75rem)"
        srcset="src/assets/images/tablet/image-hero.jpg"
      />
      <img src="src/assets/images/mobile/image-hero@2x.jpg" alt="" />
    </picture>
  );
}

export default HeroImg;
