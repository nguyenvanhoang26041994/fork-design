import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Badge from '../Badge';

const PureBadge = Badge.PureBadge;

const Avatar = ({ className, badge, ...otherProps }) => {
  return (
    <PureBadge
      className={cn('fnotification-avatar', className)}
      badge={(
        <div className="fbadge-ui">
          {badge}
        </div>
      )}
      {...otherProps}
    />
  );
};

Avatar.displayName = 'Notification.Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
};
Avatar.defaultProps = {
  placement: 'bottom-end',
  overlap: true,
};

export default Avatar;
