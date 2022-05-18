import React from 'react';
import PropTypes from 'prop-types';

const ArrowToLeft = props => {
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
      <path d="M21 12H7m0 0l4-4m-4 4l4 4m-8 3V5"></path>
    </svg>
  );
};

ArrowToLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowToLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowToLeft;
