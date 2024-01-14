import React, { Component } from 'react';
import fetchImages from './Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import 'components/App.css';

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
      totalHits: 0,
    };
  }

  handleSearchSubmit = async (newQuery) => {
    this.setState({ query: newQuery, page: 1, initialLoad: false });
    const data = await fetchImages(newQuery, 1);
    this.setState({ images: data.hits, totalHits: data.totalHits });
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

  componentDidUpdate(prevProps, prevState) {
    const { page, images, totalHits, loading } = this.state;

    if (page > 1 && images.length >= totalHits && !loading) {
      // All images have been loaded, hide the button
      if (loading !== false) {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading, showModal, selectedImageUrl, initialLoad, totalHits} = this.state;

    const shouldRenderLoadMoreButton = images.length < totalHits && !loading;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {!initialLoad && (
          <>
            <ImageGallery images={images} onImageClick={this.handleImageClick} />
            {loading && <Loader />}
            {shouldRenderLoadMoreButton && <Button onClick={this.handleLoadMore} />}
            {showModal && <Modal imageUrl={selectedImageUrl} onClose={this.handleCloseModal} />}
          </>
        )}
      </div>
    );
  }
}

export  {App};
