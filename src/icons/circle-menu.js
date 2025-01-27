import React from 'react';
import PropTypes from 'prop-types';

const CircleMenu = props => {
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
      <path d="M9 8h6m-6 4h6m-6 4h6m6-4a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleMenu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleMenu;
