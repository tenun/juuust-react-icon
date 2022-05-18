import React from 'react';
import PropTypes from 'prop-types';

const CornerLeftUp = props => {
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
      <path d="M8 7l4-4m0 0l4 4m-4-4v16a2 2 0 002 2h5"></path>
    </svg>
  );
};

CornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerLeftUp;
