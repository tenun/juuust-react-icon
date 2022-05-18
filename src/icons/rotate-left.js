import React from 'react';
import PropTypes from 'prop-types';

const RotateLeft = props => {
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
      <path d="M5.29 14a7 7 0 100-4M5 5v5h5"></path>
    </svg>
  );
};

RotateLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RotateLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RotateLeft;
