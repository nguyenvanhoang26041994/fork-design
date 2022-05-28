import React from 'react';
import cn from 'classnames';

import { LabelProps } from './types';

const Label = ({
  className,
  color,
  label,
  ...otherProps
}: LabelProps): any => (
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
