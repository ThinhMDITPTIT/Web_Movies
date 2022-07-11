import React, { useCallback } from 'react';
import Carousel from '../Carousel';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function MovieCarousel({ movies, selectedMovie, onSelect }) {
  const renderItem = useCallback(
    (movie) => {
      return (
        <a
          href='#'
          className={classNames('movie-item', {
            selected: selectedMovie && selectedMovie.Id === movie.Id,
          })}
          onClick={() => onSelect(movie)}
        >
          <img src={movie.Poster} />
        </a>
      );
    },
    [onSelect, selectedMovie]
  );

  return (
    <div>
      <Carousel
        data={movies}
        numItemsDesktop={6}
        numItemsMobile={2}
        renderItem={renderItem}
      />
    </div>
  );
}

MovieCarousel.propTypes = {
  movies: PropTypes.array.isRequired,
  selectedMovie: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default MovieCarousel;
