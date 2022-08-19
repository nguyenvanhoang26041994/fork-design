import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';

import type { SkeletonProps } from './types';

const mShape = {
  circle: 'fskele-circle',
  rect: 'fskele-rect',
  p: 'fskele-p',
} as const;

const Skeleton = ({
  sx,
  className,
  w,
  h,
  style,
  size,
  shape,
  ...otherProps
}: SkeletonProps) => (
  <div
    style={makeStyle(sx, {
      width: w,
      height: h,
      fontSize: size,
      ...style,
    })}
    className={
      cn(
        'fskele',
        mapEnumClass(mShape, shape),
        className,
    )}
    {...otherProps}
  />
);

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {};

export default Skeleton;
