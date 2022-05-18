import React from 'react';
import PropTypes from 'prop-types';

const CirclePlus = props => {
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
      <path d="M12 9v3m0 0v3m0-3H9m3 0h3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CirclePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CirclePlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CirclePlus;
