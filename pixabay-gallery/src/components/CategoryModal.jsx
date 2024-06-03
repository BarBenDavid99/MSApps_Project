import React, { useState } from 'react';

const CategoryModal = ({ isOpen, onClose, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelect = () => {
        onSelectCategory(selectedCategory);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Select a Category</h2>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>

                    <option value="sports">Sports</option>
                    <option value="animals">Animals</option>
                    <option value="work">Work</option>
                    <option value="nature">Nature</option>
                    <option value="ford">Cars</option>

                </select>
                <button onClick={handleSelect}>Select</button>
            </div>
        </div>
    );
};

export default CategoryModal;