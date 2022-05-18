import React from 'react';
import PropTypes from 'prop-types';

const Exchange = props => {
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
      <path d="M20 14H4l3 3m-3-7h16l-3-3"></path>
    </svg>
  );
};

Exchange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Exchange.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Exchange;
