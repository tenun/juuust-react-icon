import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = props => {
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
      <path d="M6 3h4M3 6v4m18-4v4M6 21h4m4-18h4m-4 18h4M3 14v4m18-4v4m-6-6a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
};

Placeholder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Placeholder.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Placeholder;
