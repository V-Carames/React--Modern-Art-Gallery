function GalleryPicture({
  pictureClass,
  srcSetDesktop,
  srcSetTablet,
  srcSetMobile,
  alt,
}) {
  return (
    <picture className={`gallery__picture ${pictureClass}`}>
      <source media="(min-width: 62.5rem)" srcSet={srcSetDesktop} />
      <source media="(min-width: 43.75rem)" srcSet={srcSetTablet} />
      <img src={srcSetMobile} alt={alt} />
    </picture>
  );
}

export default GalleryPicture;
