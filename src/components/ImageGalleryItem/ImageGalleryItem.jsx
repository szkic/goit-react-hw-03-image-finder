export const ImageGalleryItem = props => {
  const { id, webformatURL } = props;

  return (
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt="" />
    </li>
  );
};
