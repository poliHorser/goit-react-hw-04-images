import React, { useState, useEffect } from 'react';
import fetchImages from './Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import 'components/App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [totalHits, setTotalHits] = useState(0);

  const handleSearchSubmit = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setInitialLoad(false);

    const data = await fetchImages(newQuery, 1);
    setImages(data.hits);
    setTotalHits(data.totalHits);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const data = await fetchImages(query, nextPage);

    setImages((prevImages) => [...prevImages, ...data.hits]);
    setPage(nextPage);
    setLoading(false);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImageUrl('');
  };

  useEffect(() => {
    if (page > 1 && images.length >= totalHits && !loading) {
      setLoading(false);
    }
  }, [page, images, totalHits, loading]);

  const shouldRenderLoadMoreButton = images.length < totalHits && !loading;

  return (
    <div className='App'>
      <Searchbar onSubmit={handleSearchSubmit} />
      {!initialLoad && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {loading && <Loader />}
          {shouldRenderLoadMoreButton && <Button onClick={handleLoadMore} />}
          {showModal && <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />}
        </>
      )}
    </div>
  );
};

export  {App};
