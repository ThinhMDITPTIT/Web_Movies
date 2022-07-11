import React from 'react';
import PropTypes from 'prop-types';

function MovieDetailLine({ label, value }) {
  if (!value || value === 'N/A') {
    return null;
  }
  return (
    <div className='detail-line'>
      <label className='detail-line-label'>{label}: </label>
      <span className='detail-line-value'>{value}</span>
    </div>
  );
}

MovieDetailLine.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default MovieDetailLine;
