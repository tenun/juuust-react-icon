import React from 'react';
import PropTypes from 'prop-types';

const ResizeVertical = props => {
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
      <path d="M12 10V2m0 0l3 3m-3-3L9 5m3 9v8m0 0l-3-3m3 3l3-3"></path>
    </svg>
  );
};

ResizeVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ResizeVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ResizeVertical;
