import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, imageAddress }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => {
        const { id, webformatURL, tags, largeImageURL } = photo;
        return (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            imageAddress={imageAddress}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};
