import React from 'react';
import PropTypes from 'prop-types';

const TrendingUp = props => {
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
      <path d="M15 7h6m0 0v6m0-6l-7 7-4-4-7 7"></path>
    </svg>
  );
};

TrendingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrendingUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrendingUp;
