import React from 'react';
import PropTypes from 'prop-types';

const Alarm = props => {
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
      <path d="M20.5 7.5l-2-2m-15 2l2-2M12 11v3l1.5 1.5M19 14a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );
};

Alarm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Alarm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Alarm;
