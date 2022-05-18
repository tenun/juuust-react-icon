import React from 'react';
import PropTypes from 'prop-types';

const Gallery = props => {
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
      <path d="M12 3H5a2 2 0 00-2 2v10m9-12h7a2 2 0 012 2v6m-9-8v8m0 10h7a2 2 0 002-2v-8m-9 10H5a2 2 0 01-2-2v-4m9 6v-6m0-4h9m-9 0v4m0 0H3"></path>
    </svg>
  );
};

Gallery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Gallery.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Gallery;
