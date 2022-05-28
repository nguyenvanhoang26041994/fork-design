import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';

import { SkeletonProps } from './types';

const mShape = Object.freeze({
  circle: 'fskele-circle',
  rect: 'fskele-rect',
  p: 'fskele-p'
});

const Skeleton = ({
  sx,
  className,
  w,
  h,
  style,
  size,
  shape,
  ...otherProps
}: SkeletonProps): React.ReactElement => {
  return (
    <div
      style={makeStyle(sx, {
        width: w,
        height: h,
        fontSize: size,
        ...style
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
};

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {};

export default Skeleton;
