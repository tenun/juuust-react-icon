import React from 'react';
import PropTypes from 'prop-types';

const NarrowArrowRightBottom = props => {
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
      <path d="M6 6l12 12m0 0h-6m6 0v-6"></path>
    </svg>
  );
};

NarrowArrowRightBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NarrowArrowRightBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NarrowArrowRightBottom;
