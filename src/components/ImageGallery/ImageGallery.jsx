
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import './ImageGallery.css'
import React, { Component } from 'react';


class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className="ImageGallery">
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

