import React from 'react';
import PropTypes from 'prop-types';

const SwapVertical = props => {
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
      <path d="M16 4v16m0 0l-3-3m3 3l3-3M8 20V4m0 0L5 7m3-3l3 3"></path>
    </svg>
  );
};

SwapVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwapVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SwapVertical;
