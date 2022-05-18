import React from 'react';
import PropTypes from 'prop-types';

const CircleArrowRight = props => {
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
      <path d="M7 12h10m0 0l-3-3m3 3l-3 3m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleArrowRight;
