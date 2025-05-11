import GalleryContent from "./GalleryContent";
import GalleryPicture from "./GalleryPicture";

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <GalleryPicture
          pictureClass="gallery__picture--one"
          srcSetMobile="src/assets/images/mobile/image-grid-1.jpg"
          srcSetTablet="src/assets/images/tablet/image-grid-1.jpg"
          srcSetDesktop="src/assets/images/desktop/image-grid-1.jpg"
          alt="Gallery image 1"
        />

        <GalleryContent
          heading="Your day at the gallery"
          text="Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."
          headingClass="gallery__heading--dark"
          textClass="gallery__text--dark"
          cardClass="gallery__card--light"
        />

        <GalleryPicture
          pictureClass="gallery__picture--two"
          srcSetMobile="src/assets/images/mobile/image-grid-2.jpg"
          srcSetTablet="src/assets/images/tablet/image-grid-2.jpg"
          srcSetDesktop="src/assets/images/desktop/image-grid-2.jpg"
          alt="Gallery image 2"
        />

        <GalleryPicture
          pictureClass="gallery__picture--three"
          srcSetMobile="src/assets/images/mobile/image-grid-3.jpg"
          srcSetTablet="src/assets/images/tablet/image-grid-3.jpg"
          srcSetDesktop="src/assets/images/desktop/image-grid-3.jpg"
          alt="Gallery image 3"
        />

        <GalleryContent
          heading="Come & be inspired"
          text="We’re excited to welcome you to our gallery and see how our collections influence you."
          headingClass="gallery__heading--light"
          textClass="gallery__text--light"
          cardClass="gallery__card--dark"
        />
      </div>
    </section>
  );
}

export default Gallery;
