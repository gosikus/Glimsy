import { React, useState } from 'react';
import './App.css';
import GlimsyService from './services/glimsyService.ts';
import Header from './components/header/Header.tsx';

function App() {
  const [photos, setPhotos] = useState([]);
  const glimsyService = new GlimsyService();
  const handler = async () => {
    let res = await glimsyService.getPhotos();
    setPhotos([...res]);
  };
  return (
    <div className="App">
      <Header/>
      {/* <button onClick={handler}>click</button> */}
      <div className="container">
        {photos
          ? photos.map((photo) => (
              <div className="box" key={photo.id}>
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}

export default App;
