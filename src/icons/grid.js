import React from 'react';
import PropTypes from 'prop-types';

const Grid = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M8 3H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
      <path d="M19 3h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
      <path d="M19 14h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2z"></path>
      <path d="M8 14H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2z"></path>
    </svg>
  );
};

Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Grid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Grid;
