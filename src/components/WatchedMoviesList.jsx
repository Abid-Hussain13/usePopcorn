import React from "react";
import WatchedMovie from "./WatchedMovie.jsx";

function WatchedMoviesList({ watched, onDeleteWatched, handleSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
          handleSelectedMovie={handleSelectedMovie}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
