
import './ImageGalleryItem.css'
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

    return (
      <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
        <img className="ImageGalleryItem-image " src={image.previewURL} alt={image.tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
