import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = props => {
  const { id, webformatURL, largeImageURL, tags, imageAddress } = props;

  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      value={id}
      onClick={() => imageAddress(largeImageURL)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};
