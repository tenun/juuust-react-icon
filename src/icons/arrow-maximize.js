import React from 'react';
import PropTypes from 'prop-types';

const ArrowMaximize = props => {
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
      <path d="M15 9l4-4m0 0h-4m4 0v4M9 15l-4 4m0 0h4m-4 0v-4m9-1l-4-4"></path>
    </svg>
  );
};

ArrowMaximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowMaximize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowMaximize;
