import React from 'react';
import PropTypes from 'prop-types';

const Sync = props => {
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
      <path d="M18.71 10a7.003 7.003 0 00-13.42 0m13.42 0H19V5m-.29 5H14m-8.71 4a7.003 7.003 0 0013.42 0M5.29 14H5v5m.29-5H10"></path>
    </svg>
  );
};

Sync.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sync.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Sync;
