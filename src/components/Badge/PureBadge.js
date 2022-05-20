import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import {
  makePlacements,
  placementPropType,
} from '../placements';

const mPlacements = makePlacements('fbadge');

const PureBadge = ({
  className,
  children,
  badge,
  overlap,
  placement,
  ...otherProps
}) => {
  return (
    <span
      className={cn(
        'fbadge',
        {
          'fbadge-overlap': overlap,
        },
        mPlacements[placement],
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
PureBadge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  overlap: PropTypes.bool,
  placement: placementPropType,
  badge: PropTypes.any,
};
PureBadge.defaultProps = {
  placement: 'top-end',
};

export default PureBadge;
