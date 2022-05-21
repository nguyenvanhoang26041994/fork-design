import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mColor = Object.freeze({
  transparent: 'fbadge-dot-transparent',
});

const Dot = ({
  className,
  color,
  ...otherProps
}) => {
  return (
    <sub
      style={{ backgroundColor: mColor[color] ? undefined : color }}
      className={cn('fbadge-dot', mColor[color], className)}
      {...otherProps}
    />
  );
};

Dot.displayName = 'Dot';
Dot.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Dot.defaultProps = {};

export default Dot;
