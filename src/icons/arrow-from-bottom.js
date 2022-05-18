import React from 'react';
import PropTypes from 'prop-types';

const ArrowFromBottom = props => {
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
      <path d="M12 17V3m0 0L8 7m4-4l4 4m3 14H5"></path>
    </svg>
  );
};

ArrowFromBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFromBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowFromBottom;
