import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function GenreSelect({ genres, selected, onSelect }) {
  const onChange = useCallback(
    (e) => {
      onSelect?.(e.target.value);
    },
    [onSelect]
  );

  return (
    <select value={selected} onChange={onChange}>
      <option value=''>All genres</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

GenreSelect.propTypes = {
  genres: PropTypes.array,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
};

export default GenreSelect;
