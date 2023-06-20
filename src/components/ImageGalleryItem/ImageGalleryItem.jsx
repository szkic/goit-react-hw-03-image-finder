export const ImageGalleryItem = props => {
  const { id, webformatURL, largeImageURL, imageAddress } = props;

  return (
    <li
      className="ImageGalleryItem"
      key={id}
      value={id}
      onClick={() => imageAddress(largeImageURL)}
    >
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
