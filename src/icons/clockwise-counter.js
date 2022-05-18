import React from 'react';
import PropTypes from 'prop-types';

const ClockwiseCounter = props => {
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
      <path d="M4.331 14.286a8 8 0 100-4.571M4 5.5v4.214h4M12 8v4l2 2"></path>
    </svg>
  );
};

ClockwiseCounter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClockwiseCounter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClockwiseCounter;
