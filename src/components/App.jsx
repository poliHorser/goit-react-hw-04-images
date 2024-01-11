// App.jsx
import React, { Component, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import LoaderSpin from './Loader/Loader'
import Searchbar from './Searchbar/Searchbar';
import fetchImages from './Api/Api';

class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selectedImage: null,
      searchQuery: '',
      currentPage: 1,
    };
  }

  openModal = (imageUrl, alt) => {
    this.setState({
      selectedImage: { imageUrl, alt },
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  handleSearchSubmit = async (query) => {
    try {
      const data = await fetchImages({ query, currentPage: 1 });

      this.setState({
        images: [],
        searchQuery: query,
        currentPage: 1,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleLoadMore = async () => {
    const { searchQuery, currentPage } = this.state;

    try {
      const data = await fetchImages({ query: searchQuery, currentPage: currentPage + 1 });

      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      console.error(error.message);
    }
  };

  // Викликається при монтуванні компонента
  componentDidMount() {
    this.loadInitialImages();
  }

  // Отримання початкових зображень
  loadInitialImages = async () => {
    try {
      const data = await fetchImages({ query: 'initial', currentPage: 1 });

      this.setState({
        images: data.hits,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  closeModal = () => {
    const modal = document.getElementById('Modal')
    modal.classList.toggle("visible");

    
  };

  render() {
    const { images, selectedImage, searchQuery } = this.state;
     const{largeImageURL, setLargeImageURL} = this.state
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {searchQuery && <p>Search results for: {searchQuery}</p>}
        <ImageGallery images={images} onImageClick={this.openModal} />
        {selectedImage && (
           <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />
        )}
        <button onClick={this.handleLoadMore}>Load More</button>
      </div>
    );
  }
}

export  {App};
