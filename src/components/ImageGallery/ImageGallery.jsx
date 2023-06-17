import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = photos => {
  return (
    <ul className="gallery">
      {photos.photos.map(photo => {
        const { id, webformatURL } = photo;
        return <ImageGalleryItem id={id} webformatURL={webformatURL} />;
      })}
    </ul>
  );
};
