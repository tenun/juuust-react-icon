import React from 'react';
import PropTypes from 'prop-types';

const Bills = props => {
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
      <path d="M9.667 8h4.666m-4.666 4h4.666M9.34 18.262l-.427-.438a1 1 0 00-1.506.083l-.617.792c-.584.752-1.789.339-1.789-.614V5a2 2 0 012-2h10a2 2 0 012 2v13.085c0 .953-1.205 1.366-1.79.614l-.616-.792a1 1 0 00-1.506-.083l-.427.438a1 1 0 01-1.434 0l-.51-.524a1 1 0 00-1.434 0l-.51.524a1 1 0 01-1.434 0z"></path>
    </svg>
  );
};

Bills.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bills.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bills;
