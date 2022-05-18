import React from 'react';
import PropTypes from 'prop-types';

const Wall = props => {
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
      <path d="M3 10V7a2 2 0 012-2h7m-9 5v4m0-4h5m13 0V7a2 2 0 00-2-2h-7m9 5v4m0-4h-5M3 14v3a2 2 0 002 2h7m-9-5h5m13 0v3a2 2 0 01-2 2h-7m9-5h-5m-4-9v5m0 0H8m4 0h4m-8 0v4m0 0h4m4-4v4m0 0h-4m0 0v5"></path>
    </svg>
  );
};

Wall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Wall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Wall;
