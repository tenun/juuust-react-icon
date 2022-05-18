import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
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
      <path d="M9 5h10M9 12h10M9 19h10M5 5h.1M5 12h.1M5 19h.1"></path>
    </svg>
  );
};

List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

List.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default List;
