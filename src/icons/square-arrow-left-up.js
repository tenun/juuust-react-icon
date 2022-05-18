import React from 'react';
import PropTypes from 'prop-types';

const SquareArrowLeftUp = props => {
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
      <path d="M16 16L8 8m0 0h4M8 8v4m-3 8.5h14a2 2 0 002-2v-14a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
  );
};

SquareArrowLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SquareArrowLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SquareArrowLeftUp;
