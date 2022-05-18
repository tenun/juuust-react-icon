import React from 'react';
import PropTypes from 'prop-types';

const ArrowToBottom = props => {
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
      <path d="M12 3v14m0 0l-4-4m4 4l4-4m3 8H5"></path>
    </svg>
  );
};

ArrowToBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowToBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowToBottom;
