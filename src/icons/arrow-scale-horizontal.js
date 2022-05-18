import React from 'react';
import PropTypes from 'prop-types';

const ArrowScaleHorizontal = props => {
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
      <path d="M22 12l-4-4m4 4l-4 4m4-4H2m0 0l4-4m-4 4l4 4"></path>
    </svg>
  );
};

ArrowScaleHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowScaleHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowScaleHorizontal;
