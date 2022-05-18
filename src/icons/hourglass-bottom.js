import React from 'react';
import PropTypes from 'prop-types';

const HourglassBottom = props => {
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
      <path d="M12 12L6 8V3h12v5l-6 4zm0 0l-6 4v1m6-5l6 4v1M6 17v4h12v-4M6 17h12"></path>
    </svg>
  );
};

HourglassBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HourglassBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HourglassBottom;
