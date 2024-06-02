import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, setCategory, setPage } from './features/photos/photoSlice';
import PhotoGallery from './components/PhotoGallery';
import PhotoModal from './components/PhotoModal';
import CategoryModal from './components/CategoryModal';

const App = () => {
  const dispatch = useDispatch();
  const { photos, loading, error, category, page } = useSelector((state) => state.photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPhotos({ category, page }));
  }, [dispatch, category, page]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleNext = () => {
    dispatch(setPage(page + 1));
  };

  const handlePrev = () => {
    dispatch(setPage(page > 1 ? page - 1 : 1));
  };

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  return (
    <div className="app">
      <div className="controls">
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="select-category" onClick={() => setIsCategoryModalOpen(true)}>Select Category</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
      <PhotoGallery photos={photos} onPhotoClick={handlePhotoClick} />
      {selectedPhoto && <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSelectCategory={handleCategoryChange}
      />
    </div>
  );
};

export default App;