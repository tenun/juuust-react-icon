import React from 'react';
import PropTypes from 'prop-types';

const MinimizeAlt = props => {
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
      <path d="M5 5l5 5m0 0H6m4 0V6m9 13l-5-5m0 0h4m-4 0v4"></path>
    </svg>
  );
};

MinimizeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MinimizeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MinimizeAlt;
