import React from 'react';
import cn from 'classnames';

import mapEnumClass from '../../utils/mapEnumClass';

import type { DotProps } from './types';

const mColor = Object.freeze({
  transparent: 'fbadge-dot-transparent',
});

const Dot = ({
  className,
  color,
  ...otherProps
}: DotProps): any => (
  <sub
    style={{ backgroundColor: mapEnumClass(mColor, color) ? undefined : color }}
    className={cn('fbadge-dot', mapEnumClass(mColor, color), className)}
    {...otherProps}
  />
);

Dot.displayName = 'Dot';
Dot.defaultProps = {};

export default Dot;
