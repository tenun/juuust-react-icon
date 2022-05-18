import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
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
      <path d="M4 12h12m0 0l-3-3m3 3l-3 3m0 5h5a2 2 0 002-2V6a2 2 0 00-2-2h-5"></path>
    </svg>
  );
};

Login.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Login.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Login;
