import React from 'react';
import PropTypes from 'prop-types';

const Sort = props => {
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
      <path d="M17 9l-5-5-5 5m0 6l5 5 5-5"></path>
    </svg>
  );
};

Sort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sort.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Sort;
