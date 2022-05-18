import React from 'react';
import PropTypes from 'prop-types';

const Clockwise = props => {
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
      <path d="M19.669 14.286a8 8 0 110-4.571M20 5.5v4.214h-4M12 8v4l2 2"></path>
    </svg>
  );
};

Clockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Clockwise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Clockwise;