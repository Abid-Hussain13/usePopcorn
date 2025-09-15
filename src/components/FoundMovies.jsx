import React from "react";

function FoundMovies({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies && movies.length}</strong> results
    </p>
  );
}

export default FoundMovies;
