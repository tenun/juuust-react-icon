import React from 'react';
import PropTypes from 'prop-types';

const More = props => {
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
      <path d="M11 19a1 1 0 102 0 1 1 0 00-2 0z"></path>
      <path d="M11 12a1 1 0 102 0 1 1 0 00-2 0z"></path>
      <path d="M11 5a1 1 0 102 0 1 1 0 00-2 0z"></path>
    </svg>
  );
};

More.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

More.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default More;
