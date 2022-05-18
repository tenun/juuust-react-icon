import React from 'react';
import PropTypes from 'prop-types';

const CornerUpLeft = props => {
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
      <path d="M21 19v-5a2 2 0 00-2-2H3m0 0l4 4m-4-4l4-4"></path>
    </svg>
  );
};

CornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerUpLeft;
