import React from 'react';
import PropTypes from 'prop-types';

const CircleCross = props => {
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
      <path d="M9 9l3 3m0 0l3 3m-3-3l3-3m-3 3l-3 3m12-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleCross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleCross.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleCross;
