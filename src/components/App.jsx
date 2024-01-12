import React, { Component} from 'react';
import fetchImages from './Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import 'components/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [],
      page: 1,
      loading: false,
      showModal: false,
      selectedImageUrl: '',
      initialLoad: true,
    };
  }

  handleSearchSubmit = async (newQuery) => {
    this.setState({ query: newQuery, page: 1, initialLoad: false });
    const data = await fetchImages(newQuery, 1);
    this.setState({ images: data.hits });
  };

  handleLoadMore = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    const nextPage = page + 1;
    const data = await fetchImages(query, nextPage);
    this.setState((prevState) => ({
      images: [...prevState.images, ...data.hits],
      page: nextPage,
      loading: false,
    }));
  };

  handleImageClick = (imageUrl) => {
    this.setState({ selectedImageUrl: imageUrl, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImageUrl: '' });
  };

  render() {
    const {images, loading, showModal, selectedImageUrl, initialLoad } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {!initialLoad && (
          <>
            <ImageGallery images={images} onImageClick={this.handleImageClick} />
            {loading && <Loader />}
            {images.length > 0 && !loading && <Button onClick={this.handleLoadMore} />}
            {showModal && <Modal imageUrl={selectedImageUrl} onClose={this.handleCloseModal} />}
          </>
        )}
      </div>
    );
  }
}

export  {App};
