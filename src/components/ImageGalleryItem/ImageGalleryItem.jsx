import React from 'react';
import './ImageGalleryItem.css'
const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
      <img className='ImageGalleryItem-image' src={image.previewURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
