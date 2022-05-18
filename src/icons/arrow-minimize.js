import React from 'react';
import PropTypes from 'prop-types';

const ArrowMinimize = props => {
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
      <path d="M19 5l-4 4m0 0h4m-4 0V5M5 19l4-4m0 0H5m4 0v4m5-5l-4-4"></path>
    </svg>
  );
};

ArrowMinimize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowMinimize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowMinimize;
