export const ImageGalleryItem = props => {
  const { id, webformatURL } = props;

  return (
    <li className="ImageGalleryItem" key={id}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
