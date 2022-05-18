import React from 'react';
import PropTypes from 'prop-types';

const NarrowArrowLeftUp = props => {
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
      <path d="M18 18L6 6m0 0h6M6 6v6"></path>
    </svg>
  );
};

NarrowArrowLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NarrowArrowLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NarrowArrowLeftUp;
