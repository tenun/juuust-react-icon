import React from 'react';
import PropTypes from 'prop-types';

const Watch = props => {
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
      <path d="M12 10v2h2m2-4.5L15 2H9L8 7.5m8 9L15 22H9l-1-5.5M18 12a6 6 0 11-12 0 6 6 0 0112 0z"></path>
    </svg>
  );
};

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Watch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Watch;
