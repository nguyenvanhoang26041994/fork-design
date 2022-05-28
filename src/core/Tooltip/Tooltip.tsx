import React from 'react';
import cn from 'classnames';

import Overlay from '../Overlay';

const Tooltip = ({ title, className, ...otherProps }: { title?: React.ReactNode, className?: string }): any => (
  <Overlay
    className={cn('ftooltip', className)}
    content={title}
    role="tooltip"
    {...otherProps}
  />
);
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  trigger: 'mouseenter',
  hideOnClick: false,
  arrow: true,
};

export default Tooltip;
