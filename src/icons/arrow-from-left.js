import React from 'react';
import PropTypes from 'prop-types';

const ArrowFromLeft = props => {
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
      <path d="M7 12h14m0 0l-4-4m4 4l-4 4M3 19V5"></path>
    </svg>
  );
};

ArrowFromLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFromLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowFromLeft;
