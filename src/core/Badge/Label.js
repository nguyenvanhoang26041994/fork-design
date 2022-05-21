import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Label = ({
  className,
  color,
  label,
  ...otherProps
}) => {
  return (
    <sub
      style={{ backgroundColor: color }}
      className={cn('fbadge-label', className)}
      {...otherProps}
    >
      <b className="fbadge-label-display">{label}</b>
    </sub>
  );
};

Label.displayName = 'Label';
Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.any.isRequired,
};

Label.defaultProps = {};

export default Label;
