import React from 'react';

import { Photos } from './../../common/types';

import './../gallery/gallery.module.scss';
import styles from "./../gallery/gallery.module.scss";


const Gallery: React.FC<{ photos: Photos[] }> = ({ photos }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {photos
          ? photos.map((photo) => (
              <div className={styles.box} key={photo.id}>
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default Gallery;
