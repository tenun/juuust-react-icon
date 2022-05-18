import React from 'react';
import PropTypes from 'prop-types';

const ArrowResizeVertical = props => {
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
      <path d="M12 16v6m0 0l-3-3m3 3l3-3M12 8V2m0 0L9 5m3-3l3 3m-6 7h6"></path>
    </svg>
  );
};

ArrowResizeVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowResizeVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowResizeVertical;
