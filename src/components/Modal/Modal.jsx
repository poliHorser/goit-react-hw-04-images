import React, { useState, useEffect } from 'react';

const Modal = ({ imageUrl, alt, onClose }) => {
  // Встановлення обробників клавіші ESC при монтуванні та їх очищення при демонтажі
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const handleClose = (event) => {
    // Закриття модального вікна при кліку на оверлеї
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleClose}>
      <div className="modal">
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
