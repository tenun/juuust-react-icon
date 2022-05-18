import React from 'react';
import PropTypes from 'prop-types';

const ArrowMinimizeAlt = props => {
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
      <path d="M5 5l4 4m0 0H5m4 0V5m10 14l-4-4m0 0h4m-4 0v4m-5-5l4-4"></path>
    </svg>
  );
};

ArrowMinimizeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowMinimizeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowMinimizeAlt;
