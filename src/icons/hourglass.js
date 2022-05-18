import React from 'react';
import PropTypes from 'prop-types';

const Hourglass = props => {
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
      <path d="M12 12L6 8V3h12v5l-6 4zm0 0l-6 4v5h12v-5l-6-4z"></path>
    </svg>
  );
};

Hourglass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Hourglass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Hourglass;
