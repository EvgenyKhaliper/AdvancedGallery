import React, {useEffect, useState} from 'react';
import './App.css';
import Search from "./components/search";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001"
});

function App() {
  const [data, getData] = useState([]);
  const [gallery, setGallery] = useState([]);
  
  useEffect(async () => {
    const res = await instance.get("/");
    console.log(res.data)
    getData(res.data)
  }, []);
  
  useEffect(async () => {
    if (data) {
      const res = await instance.get(`https://pixabay.com/api/?key=17036938-0f3bf7eb3cc6b295a8a503e34&q=${getStrOfQueries(data)}`);
      console.log(res.data)
      setGallery(res.data)
    }
  }, [data]);
  
  const getStrOfQueries = arr => {
    let queries;
    console.log({arr})
    arr.forEach(query => {
      console.log(query.query)
      if (!queries) {
        queries = `${query.query}`
      }
      else {
        queries += `+${query.query}`
      }
    })
    console.log({queries})
    return queries;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Advanced Gallery
        <Search/>
      </header>
    </div>
  );
}

export default App;
