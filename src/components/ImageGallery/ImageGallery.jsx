import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import './ImageGallery.css'
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
