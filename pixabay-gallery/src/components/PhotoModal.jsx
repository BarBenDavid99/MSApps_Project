import React from 'react';

const PhotoModal = ({ photo, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={photo.largeImageURL} alt={photo.tags} />
                <p>Views: {photo.views}</p>
                <p>Downloads: {photo.downloads}</p>
                <p>Collections: {photo.collections}</p>
                <p>Likes: {photo.likes}</p>
            </div>
        </div>
    );
};

export default PhotoModal;