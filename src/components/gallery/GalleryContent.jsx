function GalleryContent({ cardClass, headingClass, heading, textClass, text }) {
  return (
    <div className={`gallery__card ${cardClass}`}>
      <h2 className={`gallery__heading ${headingClass}`}>{heading}</h2>
      <p className={`gallery__text ${textClass}`}>{text}</p>
    </div>
  );
}

export default GalleryContent;
