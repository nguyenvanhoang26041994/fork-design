import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Panel from './Panel';
import useCollapse from './useCollapse';

const Collapse = ({ className, children, onClick, ...otherProps }) => {
  return (
    <div className={cn('fcollapse', className)} {...otherProps}>
      {children}
    </div>
  );
};

Collapse.Panel = Panel;
Collapse.useCollapse = useCollapse;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};
Collapse.defaultProps = {};

export default Collapse;
