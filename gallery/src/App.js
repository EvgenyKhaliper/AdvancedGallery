import React, {useState, useEffect} from 'react';
import Gallery from './Gallery';
import getImages from './ImageService';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getAndSetImages() {
      const newImages = await getImages();
      console.log("new images",newImages);
      setImages(newImages);
    }
    getAndSetImages();
  },[]);

  return (
    <>
      <Gallery images={images} />
    </>
  );
}

export default App;
