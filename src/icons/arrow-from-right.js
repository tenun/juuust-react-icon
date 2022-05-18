import React from 'react';
import PropTypes from 'prop-types';

const ArrowFromRight = props => {
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
      <path d="M17 12H3m0 0l4-4m-4 4l4 4m14 3V5"></path>
    </svg>
  );
};

ArrowFromRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFromRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowFromRight;
