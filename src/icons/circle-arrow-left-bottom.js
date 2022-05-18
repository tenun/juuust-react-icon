import React from 'react';
import PropTypes from 'prop-types';

const CircleArrowLeftBottom = props => {
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
      <path d="M16 8l-8 8m0 0h4m-4 0v-4m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

CircleArrowLeftBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleArrowLeftBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleArrowLeftBottom;
