import React from 'react';
import PropTypes from 'prop-types';

const NarrowArrowUp = props => {
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
      <path d="M12 21V3m4 4l-4-4m0 0L8 7"></path>
    </svg>
  );
};

NarrowArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NarrowArrowUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NarrowArrowUp;
