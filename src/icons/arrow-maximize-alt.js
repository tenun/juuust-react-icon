import React from 'react';
import PropTypes from 'prop-types';

const ArrowMaximizeAlt = props => {
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
      <path d="M9 9L5 5m0 0h4M5 5v4m10 6l4 4m0 0h-4m4 0v-4m-9-1l4-4"></path>
    </svg>
  );
};

ArrowMaximizeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowMaximizeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowMaximizeAlt;
