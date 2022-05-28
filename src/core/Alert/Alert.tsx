import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Closer from './Closer';
import { alertRef }  from './PusherAlert';

import { AlertProps } from './types';

export const mColor = Object.freeze({
  'primary': 'falert-primary',
  'success': 'falert-success',
  'error': 'falert-error',
  'warning': 'falert-warning',
});

const Alert = ({
  sx,
  style,
  className,
  color,
  children,
  closable,
  onClose,
  ...otherProps
}: AlertProps): React.ReactElement => {
  return (
    <div
      className={cn('falert', mapEnumClass(mColor, color), className)}
      style={makeStyle(sx, style)}
      {...otherProps}
    >
      {children}
      {closable && <Closer onClick={onClose} />}
    </div>
  );
};

Alert.ref = alertRef;
Alert.Closer = Closer;
Alert.defaultProps = {
  color: 'primary',
  closable: true,
};
export default Alert;
