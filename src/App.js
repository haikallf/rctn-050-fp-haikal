import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [inputSearch, setInputSearch] = useState("man");
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (inputSearch) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${inputSearch}&apikey=a4a74fbf`
    );
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const clickedButton = () => {
    getMovieRequest(inputSearch);
  };

  useEffect(() => {
    getMovieRequest(inputSearch);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [inputSearch]);

  return (
    <BrowserRouter>
      <Header setInputSearch={setInputSearch} clickedButton={clickedButton} />
      <div className="movies-container">
        <Movies movies={movies} />
      </div>
    </BrowserRouter>
  );
}

export default App;
