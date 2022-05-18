import React from 'react';
import PropTypes from 'prop-types';

const ArrowToRight = props => {
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
      <path d="M3 12h14m0 0l-4-4m4 4l-4 4m8 3V5"></path>
    </svg>
  );
};

ArrowToRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowToRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowToRight;
