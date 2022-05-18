import React from 'react';
import PropTypes from 'prop-types';

const ResizeHorizontal = props => {
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
      <path d="M10 12H2m0 0l3-3m-3 3l3 3m9-3h8m0 0l-3 3m3-3l-3-3"></path>
    </svg>
  );
};

ResizeHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ResizeHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ResizeHorizontal;
