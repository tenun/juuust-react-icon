import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightLeft = props => {
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
      <path d="M9 7l-5 5 5 5m6 0l5-5-5-5"></path>
    </svg>
  );
};

ArrowRightLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightLeft;
