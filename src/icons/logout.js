import React from 'react';
import PropTypes from 'prop-types';

const Logout = props => {
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
      <path d="M20 12H8m0 0l3 3m-3-3l3-3m0-5H6a2 2 0 00-2 2v12a2 2 0 002 2h5"></path>
    </svg>
  );
};

Logout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Logout.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Logout;
