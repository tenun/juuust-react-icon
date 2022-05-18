import React from 'react';
import PropTypes from 'prop-types';

const Move = props => {
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
      <path d="M12 12H3m9 0h9m-9 0v9m0-9V3m-9 9l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3m-6 6l-3-3m3 3l3-3M12 3L9 6m3-3l3 3"></path>
    </svg>
  );
};

Move.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Move.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Move;
