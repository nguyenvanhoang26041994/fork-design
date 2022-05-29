import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';

import type { AvatarProps } from './types';

const mShape = Object.freeze({
  square: 'favatar-square',
  circle: 'favatar-circle',
});

const Avatar = ({
  sx,
  style,
  className,
  src,
  size,
  color,
  shape,
  children,
  ...otherProps
}: AvatarProps): any => (
  <div
    className={cn('favatar', mapEnumClass(mShape, shape), className)}
    style={makeStyle(sx, {
      ...style,
      color,
      backgroundImage: src ? `url(${src})` : undefined,
    })}
    {...otherProps}
  >
    {!src && <span className="favatar-name">{children}</span>}
  </div>
);

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  shape: 'circle',
};

export default Avatar;
