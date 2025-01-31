import React from 'react';
import './../gallery/gallery.scss';
import { Photos } from './../../common/types';

const Gallery: React.FC<{ photos: Photos[] }> = ({ photos }) => {
  return (
    <div className="container">
      {photos
        ? photos.map((photo) => (
            <div className="box" key={photo.id}>
              <img src={photo.url} alt={photo.alt} />
            </div>
          ))
        : ''}
    </div>
  );
};

export default Gallery;
