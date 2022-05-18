import React from 'react';
import PropTypes from 'prop-types';

const CircleArrowRightBottom = props => {
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
      <path d="M8 8l8 8m0 0h-4m4 0v-4m5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleArrowRightBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleArrowRightBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleArrowRightBottom;
