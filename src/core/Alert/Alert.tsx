import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Closer from './Closer';
import { alertRef }  from './PusherAlert';

import type { AlertProps } from './types';

export const mColor = {
  'primary': 'falert-primary',
  'success': 'falert-success',
  'error': 'falert-error',
  'warning': 'falert-warning',
} as const;

const Alert = ({
  sx,
  style,
  className,
  color,
  children,
  closable,
  onClose,
  ...otherProps
}: AlertProps) => (
  <div
    className={cn('falert', mapEnumClass(mColor, color), className)}
    style={makeStyle(sx, style)}
    {...otherProps}
  >
    {children}
    {closable && <Closer onClick={onClose} />}
  </div>
);

Alert.ref = alertRef;
Alert.Closer = Closer;
Alert.defaultProps = {
  color: 'primary',
  closable: true,
};
export default Alert;
