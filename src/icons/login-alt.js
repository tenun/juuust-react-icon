import React from 'react';
import PropTypes from 'prop-types';

const LoginAlt = props => {
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
      <path d="M16 12H4m0 0l3 3m-3-3l3-3m6 11h5a2 2 0 002-2V6a2 2 0 00-2-2h-5"></path>
    </svg>
  );
};

LoginAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoginAlt;
