import React from 'react';
import PropTypes from 'prop-types';

const MoveAlt = props => {
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
      <path d="M3 12l3-3m-3 3l3 3m-3-3h6m12 0l-3-3m3 3l-3 3m3-3h-6m-3 9l-3-3m3 3l3-3m-3 3v-6m0-12L9 6m3-3l3 3m-3-3v6"></path>
    </svg>
  );
};

MoveAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoveAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoveAlt;
