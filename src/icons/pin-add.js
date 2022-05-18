import React from 'react';
import PropTypes from 'prop-types';

const PinAdd = props => {
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
      <path d="M12 7v3m0 0v3m0-3H9m3 0h3m4 .2c0 5.976-7 10.8-7 10.8s-7-4.824-7-10.8C5 6.224 8.134 3 12 3s7 3.224 7 7.2z"></path>
    </svg>
  );
};

PinAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PinAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PinAdd;
