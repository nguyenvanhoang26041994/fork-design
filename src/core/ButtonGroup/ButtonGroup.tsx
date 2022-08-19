import React from 'react';
import cn from 'classnames';

import type { ButtonGroupProps } from './types';

const ButtonGroup = ({ className, fluid, ...otherProps }: ButtonGroupProps) => (
  <div
    className={cn(
      'fgroup-btn',
      {
        'fgroup-btn-fluid': fluid,
      },
      className,
    )}
    {...otherProps}
  />
);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = {};

export default ButtonGroup;
