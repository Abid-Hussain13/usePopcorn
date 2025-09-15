import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import SiteTitle from "./components/SiteTitle";
import SearchInput from "./components/SearchInput.jsx";
import FoundMovies from "./components/FoundMovies.jsx";
import Box from "./components/Box.jsx";
import WatchedMoviesList from "./components/WatchedMoviesList.jsx";
import MoviesList from "./components/MoviesList.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import Loader from "./components/Loader.jsx";
import DisplayError from "./components/DisplayError.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { useMovies } from "./components/useMovies.jsx";
import { useLocalStorageState } from "./components/useLocalStorageState";

export default function App_v2() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const { value: watched, setValue: setWatched } = useLocalStorageState(
    [],
    "Watched"
  );

  function handleSelectedMovie(id) {
    setSelectedId(selectedId === id ? null : id);
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(movieImdbId) {
    setWatched((watched) => watched.filter((m) => m.imdbID !== movieImdbId));
  }

  const { movies, error, loading } = useMovies(query);

  return (
    <>
      <Navbar>
        <SiteTitle />
        <SearchInput setQuery={setQuery} query={query} />
        <FoundMovies movies={movies} />
      </Navbar>
      <Body>
        <Box>
          {loading && !error && <Loader />}
          {!loading && !error && (
            <MoviesList
              movies={movies}
              handleSelectedMovie={handleSelectedMovie}
            />
          )}
          {error && <DisplayError message={error} nb v />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
                handleSelectedMovie={handleSelectedMovie}
              />
            </>
          )}
        </Box>
      </Body>
    </>
  );
}
