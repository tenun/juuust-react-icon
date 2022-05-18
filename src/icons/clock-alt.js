import React from 'react';
import PropTypes from 'prop-types';

const ClockAlt = props => {
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
      <path d="M12 8v4l2 2m6-2a8 8 0 11-16 0 8 8 0 0116 0z"></path>
    </svg>
  );
};

ClockAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClockAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClockAlt;
