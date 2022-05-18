import React from 'react';
import PropTypes from 'prop-types';

const CircleSort = props => {
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
      <path d="M9 14.444L12 17l3-2.556m0-4.888L12 7 9 9.556M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleSort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleSort.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleSort;
