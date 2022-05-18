import React from 'react';
import PropTypes from 'prop-types';

const CornerUpRight = props => {
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
      <path d="M17 8l4 4m0 0l-4 4m4-4H5a2 2 0 00-2 2v5"></path>
    </svg>
  );
};

CornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerUpRight;
