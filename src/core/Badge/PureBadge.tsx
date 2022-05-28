import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import { makePlacements } from '../placements';
import { PureBadgeProps } from './types';

const mPlacements = makePlacements('fbadge');

const PureBadge = ({
  className,
  children,
  badge,
  overlap,
  placement,
  ...otherProps
}: PureBadgeProps): React.ReactElement => {
  return (
    <span
      className={cn(
        'fbadge',
        {
          'fbadge-overlap': overlap,
        },
        mapEnumClass(mPlacements, placement),
        className
      )}
      {...otherProps}
    >
      {children}
      {badge}
    </span>
  );
};

PureBadge.displayName = 'Badge.PureBadge';
PureBadge.defaultProps = {
  placement: 'top-end',
};

export default PureBadge;
