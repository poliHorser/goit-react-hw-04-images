import React, { useState, useEffect } from 'react';
import fetchImages from './Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';


const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);

  const handleSearchSubmit = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setInitialLoad(false);
    const data = await fetchImages(newQuery, 1);
    setImages(data.hits);
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
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchImages(query, page);
      setImages(data.hits);
      setLoading(false);
    };

    if (!initialLoad) {
      fetchData();
    }
  }, [query, page, initialLoad]);

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {!initialLoad && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {loading && <Loader />}
          {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
          {showModal && <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />}
        </>
      )}
    </div>
  );
};

export  {App};
