import React, { useEffect, useMemo, useState } from "react";
import GenreSelect from "../components/GenreSelect";
import MovieCarousel from "../components/MovieCarousel";
import MovieDetail from "../components/MovieDetail";
import useGenres from "../hooks/useGenres";
import useMovies from "../hooks/useMovies";
import "./MoviePage.scss";

function MoviePage() {
  const { data: movies, loading, errorMessage } = useMovies();
  const genres = useGenres(movies);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = useMemo(() => {
    if (!selectedGenre || selectedGenre === "") {
      return movies;
    }
    return movies.filter((movie) => movie.Genre.includes(selectedGenre));
  }, [movies, selectedGenre]);

  useEffect(() => {
    setSelectedMovie(movies?.[0]);
  }, [movies]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="container movie-page">
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <div className="genre-container">
        <span>{filteredMovies.length} movies</span>
        <GenreSelect
          genres={genres}
          selected={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </div>
      <div>
        <MovieCarousel
          movies={filteredMovies}
          selectedMovie={selectedMovie}
          onSelect={setSelectedMovie}
        />
      </div>
    </div>
  );
}

export default MoviePage;
