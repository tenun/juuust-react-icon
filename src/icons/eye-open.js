import React from 'react';
import PropTypes from 'prop-types';

const EyeOpen = props => {
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
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
};

EyeOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EyeOpen;