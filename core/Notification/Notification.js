import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import { notificationRef } from './PusherNotification';

const Notification = ({
  className,
  hasDot,
  ...otherProps
}) => {
  return (
    <div
      className={cn('fnotification', { 'fnotification-has-dot': hasDot }, className)}
      {...otherProps}
    />
  );
};

Notification.ref = notificationRef;
Notification.Avatar = Avatar;
Notification.displayName = 'Notification';
Notification.propTypes = {
  className: PropTypes.string,
  hasDot: PropTypes.bool,
};
Notification.defaultProps = {
  hasDot: true,
};

export default Notification;
