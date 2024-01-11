// Modal.jsx
import React, { useEffect } from 'react';

const Modal = ({ largeImageURL, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div id='Modal' className='Modal Toggle'>
      <div>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  )
}
export default Modal