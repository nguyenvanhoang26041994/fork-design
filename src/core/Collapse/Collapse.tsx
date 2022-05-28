import React from 'react';
import cn from 'classnames';

import Panel from './Panel';
import useCollapse from './useCollapse';

const Collapse = ({
  className,
  ...otherProps
}: React.HTMLAttributes<HTMLDivElement>): any => (
  <div
    className={cn('fcollapse', className)}
    {...otherProps}
  />
);

Collapse.Panel = Panel;
Collapse.useCollapse = useCollapse;

Collapse.displayName = 'Collapse';
Collapse.defaultProps = {};

export default Collapse;
