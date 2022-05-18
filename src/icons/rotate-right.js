import React from 'react';
import PropTypes from 'prop-types';

const RotateRight = props => {
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
      <path d="M18.71 14a7 7 0 110-4m0 0H19V5m-.29 5H14"></path>
    </svg>
  );
};

RotateRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RotateRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RotateRight;
