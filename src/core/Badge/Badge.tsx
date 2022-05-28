import React from 'react';

import Counter from './Counter';
import Dot from './Dot';
import Label from './Label';

import PureBadge from './PureBadge';

import { BadgeCounterProps, BadgeDotProps, BadgeLabelProps } from './types';

const Badge = () => {};
Badge.PureBadge = PureBadge;

const BadgeCounter = ({
  count,
  overflow,
  color,
  renderOverflow,
  ...otherProps
}: BadgeCounterProps): React.ReactElement => (
  <PureBadge
    badge={(
      <Counter
        count={count}
        overflow={overflow}
        renderOverflow={renderOverflow}
        color={color}
        className="fbadge-ui"
      />
    )}
    {...otherProps}
  />
);

const BadgeDot = ({ color, ...otherProps }: BadgeDotProps): React.ReactElement => (
  <PureBadge
    badge={<Dot color={color} className="fbadge-ui" />}
    {...otherProps}
  />
);

const BadgeLabel = ({
  label,
  color,
  ...otherProps
}: BadgeLabelProps): React.ReactElement => (
  <PureBadge
    badge={(
      <Label
        color={color}
        label={label}
        className="fbadge-ui"
      />
    )}
    {...otherProps}
  />
);

Badge.Counter = BadgeCounter;
Badge.Dot = BadgeDot;
Badge.Label = BadgeLabel;

export default Badge;
export { PureBadge, BadgeCounter, BadgeDot, BadgeLabel };
