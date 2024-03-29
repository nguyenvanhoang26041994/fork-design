import React from 'react';
import cn from 'classnames';

import Button from '../Button';
import type { ButtonProps } from '../Button/types';

import X from '../../icons/X';

const Closer = ({ className, ...otherProps }: ButtonProps) => (
  <Button
    className={cn('falert-closer', className)}
    {...otherProps}
  />
);

Closer.displayName = 'Alert.Closer';
Closer.defaultProps = {
  startIcon: <X />,
  variant: 'text',
  rounded: true,
};
export default Closer;
