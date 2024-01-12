import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(image.largeImageURL)}>
      <img src={image.previewURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
