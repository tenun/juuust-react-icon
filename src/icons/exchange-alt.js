import React from 'react';
import PropTypes from 'prop-types';

const ExchangeAlt = props => {
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
      <path d="M4 14h16l-3 3m3-7H4l3-3"></path>
    </svg>
  );
};

ExchangeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExchangeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExchangeAlt;
