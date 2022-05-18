import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = props => {
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
      <path d="M3 7c.91 4.008 4.717 7 9 7s8.09-2.992 9-7m-6.5 7.5l1 3m3-5l2 2m-11 0l-1 3m-3-5l-2 2"></path>
    </svg>
  );
};

EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeClosed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EyeClosed;
