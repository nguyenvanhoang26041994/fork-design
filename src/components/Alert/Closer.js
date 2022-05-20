import React from 'react';
import cn from 'classnames';

import Button from '../Button';
import X from '../icons/X';

const Closer = ({ className, ...otherProps }) => {
  return (
    <Button
      className={cn('falert-closer', className)}
      {...otherProps}
    />
  );
};

Closer.displayName = 'Alert.Closer';
Closer.defaultProps = {
  icon: <X />,
  color: 'transparent',
  rounded: true,
};
export default Closer;
