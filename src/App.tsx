import React from 'react';
import { useState, useEffect } from 'react';

import Header from './components/header/Header.tsx';
import Gallery from './components/gallery/Gallery.tsx';

import GlimsyService from './services/glimsyService.ts';
import { Photo } from './common/types.ts';

import './App.css';
import NotFound from './components/notFound/NotFound.tsx';
import Loader from './components/loader/Loader.tsx';

// todo
// transfer request status
// check fetchData function
// cash update
// pagination

const App: React.FC = () => {
  const glimsyService = new GlimsyService();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (values: { request?: string } = { request: 'random'}): Promise<void> => {
    loaderHandler();
    try {
      let res: Photo[] = await glimsyService.getPhotos(values.request);
      dataHandler(res);
    } catch (e) {
      errorHandler(e as Error);
    }
  };

  const errorHandler = (e: Error) => {
    setLoad(false);
    setError(true);
  };

  const loaderHandler = () => {
    setError(false);
    setLoad(true);
  };

  const dataHandler = (data: Photo[]) => {
    setPhotos([...data]);
    setLoad(false);
    setError(false);
  };

  return (
    <div className="App">
      <Header fetchData={fetchData} />
      <div className="container">
        {error && !load ? <NotFound /> : ''}
        {!error && load ? <Loader /> : ''}
        {!error && !load ? <Gallery photos={photos} /> : ''}
      </div>
    </div>
  );
};

export default App;
