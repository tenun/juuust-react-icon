import React from 'react';
import PropTypes from 'prop-types';

const NarrowArrowRightUp = props => {
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
      <path d="M6 18L18 6m0 0h-6m6 0v6"></path>
    </svg>
  );
};

NarrowArrowRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NarrowArrowRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NarrowArrowRightUp;
