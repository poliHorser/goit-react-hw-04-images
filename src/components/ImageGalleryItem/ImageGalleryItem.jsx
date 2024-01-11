import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => {
  return(
  <li className="gallery-item">
    <img src={image.webformatURL} openModal={() =>  openModal(image.largeImageURL)} />
    </li>
  )
}

export default ImageGalleryItem;