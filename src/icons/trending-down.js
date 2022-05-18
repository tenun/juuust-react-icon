import React from 'react';
import PropTypes from 'prop-types';

const TrendingDown = props => {
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
      <path d="M15 17h6m0 0v-6m0 6l-7-7-4 4-7-7"></path>
    </svg>
  );
};

TrendingDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrendingDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrendingDown;
