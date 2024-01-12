
import './ImageGalleryItem.css'
import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
      <img className="ImageGalleryItem-image " src={image.previewURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;

