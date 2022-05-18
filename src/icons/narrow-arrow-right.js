import React from 'react';
import PropTypes from 'prop-types';

const NarrowArrowRight = props => {
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
      <path d="M3 12h18m0 0l-4-4m4 4l-4 4"></path>
    </svg>
  );
};

NarrowArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NarrowArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NarrowArrowRight;
