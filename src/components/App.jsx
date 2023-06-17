import { Component } from 'react';
import { fetchPhotosWithQuery } from './services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    photos: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const photos = await fetchPhotosWithQuery();
      console.log(photos);
      photos.map(photo => {
        return this.setState(prevState => ({
          photos: [
            ...prevState.photos,
            {
              id: photo.id,
              webformatURL: photo.webformatURL,
              largeImageURL: photo.largeImageURL,
            },
          ],
        }));
      });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
  }

  searchValue = e => {
    console.log(e);
  };

  showPhotos = () => {
    const { photos } = this.state;

    return photos;

    // console.log('showPhotos', photos);
  };

  render() {
    console.log('state', this.state);

    return (
      <>
        <Searchbar onSubmit={this.searchValue} />
        <ImageGallery photos={this.showPhotos()} />
      </>
    );
  }
}
