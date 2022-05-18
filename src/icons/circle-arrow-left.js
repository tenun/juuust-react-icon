import React from 'react';
import PropTypes from 'prop-types';

const CircleArrowLeft = props => {
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
      <path d="M17 12H7m0 0l3-3m-3 3l3 3m11-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleArrowLeft;
