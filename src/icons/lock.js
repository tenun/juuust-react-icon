import React from 'react';
import PropTypes from 'prop-types';

const Lock = props => {
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
      <path d="M8 9.2V7a4 4 0 014-4v0a4 4 0 014 4v2.2M14 15v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0a2 2 0 002 2v0a2 2 0 002-2zm-8 6h12a2 2 0 002-2v-7.8a2 2 0 00-2-2H6a2 2 0 00-2 2V19a2 2 0 002 2z"></path>
    </svg>
  );
};

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Lock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Lock;
