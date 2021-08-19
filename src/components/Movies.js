import React from "react";
import "./Movies.css";

function Movies(props) {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="movies">
          <img src={movie.Poster} alt="movie card" />
          <div className="movies-title">
            <div>
              {movie.Title} ({movie.Year})
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Movies;
