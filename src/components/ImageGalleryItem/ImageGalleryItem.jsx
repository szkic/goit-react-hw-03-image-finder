export const ImageGalleryItem = props => {
  const { id, webformatURL } = props;

  const handleClick = e => {
    console.log(e.currentTarget.value);
  };

  return (
    <li className="ImageGalleryItem" key={id} value={id} onClick={handleClick}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
