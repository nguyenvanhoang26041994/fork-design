import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';

const Popover = ({ overlay, className, ...otherProps }) => {
  return (
   <Overlay
      className={cn('fpopover', className)}
      content={overlay}
      role="popover"
      {...otherProps}
    />
  );
};

Popover.displayName = 'Popover';
Popover.propTypes = {
  className: PropTypes.string,
};
Popover.defaultProps = {
  trigger: 'click',
  hideOnClick: true,
  arrow: true,
  maxWidth: 'none',
};

export default Popover;
