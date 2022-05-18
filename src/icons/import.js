import React from 'react';
import PropTypes from 'prop-types';

const Import = props => {
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
      <path d="M12 8v12m0 0l3-3m-3 3l-3-3m-5-6V6a2 2 0 012-2h12a2 2 0 012 2v5"></path>
    </svg>
  );
};

Import.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Import.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Import;
