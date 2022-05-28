import React from 'react';
import cn from 'classnames';

import Overlay from '../Overlay';

const Popover = ({ overlay, className, ...otherProps }: { overlay?: any, className?: string }): any => (
  <Overlay
    className={cn('fpopover', className)}
    content={overlay}
    role="popover"
    {...otherProps}
  />
);

Popover.displayName = 'Popover';
Popover.defaultProps = {
  trigger: 'click',
  hideOnClick: true,
  arrow: true,
  maxWidth: 'none',
};

export default Popover;
