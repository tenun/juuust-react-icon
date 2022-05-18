import React from 'react';
import PropTypes from 'prop-types';

const ResizeHorizontalAlt = props => {
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
      <path d="M2 12h8m0 0L7 9m3 3l-3 3m15-3h-8m0 0l3 3m-3-3l3-3"></path>
    </svg>
  );
};

ResizeHorizontalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ResizeHorizontalAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ResizeHorizontalAlt;
