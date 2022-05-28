import React from 'react';
import cn from 'classnames';

import { ButtonGroupProps } from './types';

const ButtonGroup = ({ className, fluid, ...otherProps }: ButtonGroupProps): React.ReactElement => (
  <div
    className={cn(
      'fgroup-btn',
      {
        'fgroup-btn-fluid': fluid
      },
      className
    )}
    {...otherProps}
  />
);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = {};

export default ButtonGroup;
