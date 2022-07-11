import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MovieDetailLine from './MovieDetailLine';
import './index.scss';

function MovieDetail({ movie }) {
  const part1 = useMemo(
    () => (
      <>
        <h1 className='title'>{movie.Title}</h1>
        <MovieDetailLine label='Year' value={movie.Year} />
        <MovieDetailLine label='Released' value={movie.Released} />
        <MovieDetailLine label='Runtime' value={movie.Runtime} />
        <MovieDetailLine label='Rated' value={movie.Rated} />
        <MovieDetailLine label='Genre' value={movie.Genre.join(', ')} />
        <MovieDetailLine label='Director' value={movie.Director} />
        <MovieDetailLine label='Writer' value={movie.Writer} />
        <MovieDetailLine label='Actors' value={movie.Actors} />
      </>
    ),
    [movie]
  );

  const part2 = useMemo(
    () => (
      <>
        <MovieDetailLine label='Plot' value={movie.Plot} />
        <MovieDetailLine label='Language' value={movie.Language} />
        <MovieDetailLine label='Country' value={movie.Country} />
        <MovieDetailLine label='Awards' value={movie.Awards} />
        <MovieDetailLine label='Metascore' value={movie.Metascore} />
        <MovieDetailLine label='Rating' value={movie.Rating} />
        <MovieDetailLine label='Votes' value={movie.Votes} />
        <MovieDetailLine label='Type' value={movie.Type} />
        <MovieDetailLine label='BoxOffice' value={movie.BoxOffice} />
        <MovieDetailLine label='Production' value={movie.Production} />
      </>
    ),
    [movie]
  );

  return (
    <div className='movie-detail'>
      <div className='mobile-only mobile-header'>{part1}</div>
      <div className='columns '>
        <div className='column image'>
          <img src={movie.Poster} />
        </div>
        <div className='column metadata'>
          <div className='desktop-only'>{part1}</div>
          <div>{part2}</div>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetail;
