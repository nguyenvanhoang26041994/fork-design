import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mShape = Object.freeze({
  square: 'favatar-square',
  circle: 'favatar-circle',
});

const lShape = Object.keys(mShape);

const Avatar = ({
  className,
  src,
  style,
  size,
  color,
  shape,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={cn('favatar', mShape[shape], className)}
      style={{
        ...style,
        color,
        backgroundImage: src ? `url(${src})` : undefined,
        '--avatar-size': size ? `${size}px` : undefined,
      }}
      {...otherProps}
    >
      {!src && <span className="favatar-name">{children}</span>}
    </div>
  );
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  shape: PropTypes.oneOf(lShape),
  circle: PropTypes.bool,
  square: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};
Avatar.defaultProps = {
  shape: 'circle',
};

export default Avatar;
