import React from 'react';
import PropTypes from 'prop-types';

const CornerDownLeft = props => {
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
      <path d="M21 5v5a2 2 0 01-2 2H3m0 0l4 4m-4-4l4-4"></path>
    </svg>
  );
};

CornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerDownLeft;
