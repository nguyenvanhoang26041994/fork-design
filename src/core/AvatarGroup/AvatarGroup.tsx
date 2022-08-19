import React from 'react';
import cn from 'classnames';

const AvatarGroup = ({ className, ...otherProps }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('favatar-group', className)}
    {...otherProps}
  />
);

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {};

export default AvatarGroup;
