import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import withMeansure from '../../HOCs/withMeansure';

const Expand = memo(({ children, isOpen, meansure, className, wrapperRef }) => {
  const height = useMemo(() => isOpen ? meansure.height : 0, [isOpen, meansure.height]);

  return (
    <div
      className={cn('fanimated fanimated-expand', className)}
      style={{ height }}
      ref={wrapperRef}
    >
      {children}
    </div>
  );
});

Expand.displayName = 'Expand';
Expand.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  wrapperRef: PropTypes.any,
};
Expand.defaultProps = {};

export default withMeansure(Expand);
