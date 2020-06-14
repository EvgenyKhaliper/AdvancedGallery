import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search/Search";
import { saveQuery, getImagesFromApi } from "./networking";
import Gallery from "./Gallery/Gallery";

function App() {
  const [saving, setSaving] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const onSearch = async (term) => {
    setSaving(true);
    setImages([]);
    setQuery(term);
    const { status } = await saveQuery(term);
    setSaving(false);
    if (status === 200) {
      getImages(term);
    }
  };

  const getImages = async (query) => {
    const { status, data } = await getImagesFromApi(query);

    if (status === 200) {
      setImages(data.hits || []);
    }
  };

  return (
    <div className="App">
      <Search onSearch={onSearch} disabled={saving} />
      <Gallery images={images} />
    </div>
  );
}

export default App;
