import React from 'react';
import cn from 'classnames';

import Closer from './Closer';
import { alertRef }  from './PusherAlert';

const mColors = Object.freeze({
  success: 'falert-success',
  primary: 'falert-primary',
  danger: 'falert-danger',
  warning: 'falert-warning',
});

const Alert = ({ className, color, children, closable, onClose, ...otherProps }) => {
  return (
    <div className={cn('falert', mColors[color], className)} {...otherProps}>
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
