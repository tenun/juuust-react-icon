import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
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
      <path d="M12 11c2.111 0 4-1.772 4-4 0-2.228-1.889-4-4-4-2.112 0-4 1.772-4 4 0 2.228 1.888 4 4 4z"></path>
      <path d="M12 15c-1.812 0-6.407.569-7.673 4.035C3.948 20.073 4.895 21 6 21h12c1.105 0 2.052-.927 1.673-1.965C18.407 15.57 13.813 15 12 15z"></path>
    </svg>
  );
};

User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

User.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default User;
