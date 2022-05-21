import React from 'react';
import cn from 'classnames';

import Overlay from '../Overlay';

const Tooltip = ({ title, className, ...otherProps }) => {
  return (
    <Overlay
      className={cn('ftooltip', className)}
      content={title}
      role="tooltip"
      {...otherProps}
    />
  );
};
Tooltip.defaultProps = {
  trigger: 'mouseenter',
  hideOnClick: false,
  arrow: true,
};

export default Tooltip;
