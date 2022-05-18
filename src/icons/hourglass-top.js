import React from 'react';
import PropTypes from 'prop-types';

const HourglassTop = props => {
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
      <path d="M12 12L6 8V7m6 5l-6 4v5h12v-5l-6-4zm0 0l6-4V7M6 7V3h12v4M6 7h12"></path>
    </svg>
  );
};

HourglassTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HourglassTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HourglassTop;
