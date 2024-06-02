import React from 'react';

const PhotoGallery = ({ photos, onPhotoClick }) => {
    return (
        <div className="photo-gallery">
            {photos.map(photo => (
                <img
                    key={photo.id}
                    src={photo.webformatURL}
                    alt={photo.tags}
                    onClick={() => onPhotoClick(photo)}
                />
            ))}
        </div>
    );
};

export default PhotoGallery;