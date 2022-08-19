import React from 'react';
import cn from 'classnames';

import mapEnumClass from '../../utils/mapEnumClass';

import type { DotProps } from './types';

const mColor = {
  transparent: 'fbadge-dot-transparent',
} as const;

const Dot = ({
  className,
  color,
  ...otherProps
}: DotProps) => (
  <sub
    style={{ backgroundColor: mapEnumClass(mColor, color) ? undefined : color }}
    className={cn('fbadge-dot', mapEnumClass(mColor, color), className)}
    {...otherProps}
  />
);

Dot.displayName = 'Dot';
Dot.defaultProps = {};

export default Dot;
