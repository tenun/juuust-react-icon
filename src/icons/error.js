import React from 'react';
import PropTypes from 'prop-types';

const Error = props => {
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
      <path d="M12 8v4m0 2.99V15m-8.586-1.586l7.172 7.172a2 2 0 002.828 0l7.172-7.172a2 2 0 000-2.828l-7.172-7.172a2 2 0 00-2.828 0l-7.172 7.172a2 2 0 000 2.828z"></path>
    </svg>
  );
};

Error.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Error.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Error;
