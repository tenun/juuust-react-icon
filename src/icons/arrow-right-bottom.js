import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightBottom = props => {
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
      <path d="M18 18L6 6m12 12H9m9 0V9"></path>
    </svg>
  );
};

ArrowRightBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightBottom;
