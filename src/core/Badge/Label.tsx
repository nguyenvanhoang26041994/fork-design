import React from 'react';
import cn from 'classnames';

import type { LabelProps } from './types';

const Label = ({
  className,
  color,
  label,
  ...otherProps
}: LabelProps) => (
  <sub
    style={{ backgroundColor: color }}
    className={cn('fbadge-label', className)}
    {...otherProps}
  >
    <b className="fbadge-label-display">{label}</b>
  </sub>
);

Label.displayName = 'Label';
Label.defaultProps = {};

export default Label;
