import React from 'react';
import PropTypes from 'prop-types';

const ArrowScaleDiagonal = props => {
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
      <path d="M14 4h6m0 0v6m0-6L4 20m6 0H4m0 0v-6"></path>
    </svg>
  );
};

ArrowScaleDiagonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowScaleDiagonal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowScaleDiagonal;
