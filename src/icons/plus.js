import React from 'react';
import PropTypes from 'prop-types';

const Plus = props => {
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
      <path d="M12 6v12m-6-6h12"></path>
    </svg>
  );
};

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Plus;
