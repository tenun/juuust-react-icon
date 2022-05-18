import React from 'react';
import PropTypes from 'prop-types';

const Pin = props => {
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
      <path d="M19 10.2c0 5.976-7 10.8-7 10.8s-7-4.824-7-10.8C5 6.224 8.134 3 12 3s7 3.224 7 7.2z"></path>
      <path d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pin;
