export const ImageGalleryItem = props => {
  const { id, webformatURL, largeImageURL, tags, imageAddress } = props;

  return (
    <li
      className="ImageGalleryItem"
      key={id}
      value={id}
      onClick={() => imageAddress(largeImageURL)}
    >
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
