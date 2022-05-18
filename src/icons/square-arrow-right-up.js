import React from 'react';
import PropTypes from 'prop-types';

const SquareArrowRightUp = props => {
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
      <path d="M8 16l8-8m0 0h-4m4 0v4M5 20.5h14a2 2 0 002-2v-14a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
  );
};

SquareArrowRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SquareArrowRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SquareArrowRightUp;
