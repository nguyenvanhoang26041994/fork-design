import React, { useMemo } from 'react';
import cn from 'classnames';

import type { CounterProps } from './types';

const Counter = ({
  className,
  count,
  overflow,
  color,
  renderOverflow,
  ...otherProps
}: CounterProps) => {
  const displayCount = useMemo(() => {
    if (count > overflow) {
      return renderOverflow(overflow);
    }

    return count;
  } ,[count, overflow, renderOverflow]);

  return (
    <sub
      style={{ backgroundColor: color }}
      className={cn('fbadge-counter', className)}
      {...otherProps}
    >
      <b className="fbadge-display-count">{displayCount}</b>
    </sub>
  );
};

Counter.displayName = 'Counter';
Counter.defaultProps = {
  overflow: Infinity,
  renderOverflow: (overflow: number) => `${overflow}+`,
};

export default Counter;
