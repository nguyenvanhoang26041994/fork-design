import React from 'react';
import cn from 'classnames';

import X from '../../icons/X';
import type { ChipProps } from './types';

const Chip = ({
  className,
  rounded,
  children,
  closable,
  onClose,
  size,
  style,
  clickable,
  ...otherProps
}: ChipProps): any => (
  <div
    className={cn(
      'fchip',
      {
        'fchip-rounded': rounded,
        'fchip-clickable': clickable,
      },
      className,
    )}
    style={{
      fontSize: size,
      ...style,
    }}
    {...otherProps}
  >
    <span className="fchip-child">{children}</span>
    {closable && (
      <div className="fchip-close" onClick={onClose}>
        <X />
      </div>
    )}
  </div>
);

Chip.displayName = 'Chip';
export default Chip;
