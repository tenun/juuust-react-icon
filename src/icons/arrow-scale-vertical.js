import React from 'react';
import PropTypes from 'prop-types';

const ArrowScaleVertical = props => {
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
      <path d="M8 6l4-4m0 0l4 4m-4-4v20m0 0l-4-4m4 4l4-4"></path>
    </svg>
  );
};

ArrowScaleVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowScaleVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowScaleVertical;
