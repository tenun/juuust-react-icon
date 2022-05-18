import React from 'react';
import PropTypes from 'prop-types';

const Warning = props => {
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
      <path d="M12 9v4m0 2.99V16m-6.687 4h13.374c1.505 0 2.471-1.6 1.77-2.931L13.77 4.363c-.75-1.425-2.79-1.425-3.54 0L3.543 17.068C2.842 18.4 3.808 20 5.313 20z"></path>
    </svg>
  );
};

Warning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Warning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Warning;
