import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightUp = props => {
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
      <path d="M18 6L6 18M18 6v9m0-9H9"></path>
    </svg>
  );
};

ArrowRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightUp;
