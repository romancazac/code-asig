import React, { useState } from 'react';
import './style.scss';

export const Spoller = ({ i  , title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(i === 1); // Deschide primul element la încărcarea paginii

  const toggleSpoller = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`spoller ${className}`}>
      <div className="spoller__body">
        <div className={`spoller__row`}>
          <button
            onClick={toggleSpoller}
            className={`spoller__btn icon-close ${isOpen ? '_active' : ''}`}
          >
            {title}
          </button>
        </div>

        {isOpen && (
          <div className="spoller__content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};