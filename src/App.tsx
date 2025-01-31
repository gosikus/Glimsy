import { useState } from 'react';
import React from 'react';

import './App.css';
import GlimsyService from './services/glimsyService.ts';
import Header from './components/header/Header.tsx';
import Gallery from './components/gallery/Gallery.tsx';
import {Photos} from "./common/types.ts"

// todo
// флаг loading и error возвращать через service

const App: React.FC = () => {
  const glimsyService = new GlimsyService();

  const [photos, setPhotos] = useState<Photos[]>([]);

  const fetchData = async (values) => {
    let res = await glimsyService.getPhotos(values);
    setPhotos([...res]);
  };

  return (
    <div className="App">
      <Header fetchData={fetchData} />
      <Gallery photos={photos} />
    </div>
  );
};

export default App;
