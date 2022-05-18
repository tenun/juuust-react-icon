import React from 'react';
import PropTypes from 'prop-types';

const ArrowheadRight = props => {
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
      <path d="M4 4l7 8-7 8m9.067-16L20 12l-6.933 8"></path>
    </svg>
  );
};

ArrowheadRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowheadRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowheadRight;
