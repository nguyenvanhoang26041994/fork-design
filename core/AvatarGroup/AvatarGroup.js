import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const AvatarGroup = ({ className, ...otherProps }) => {
  return (
    <div
      className={cn('favatar-group', className)}
      {...otherProps}
    />
  );
};

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.propTypes = {
  className: PropTypes.string,
};
AvatarGroup.defaultProps = {};

export default AvatarGroup;
