import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Dialog from '../Dialog';

import useDebounce from '../../hooks/useDebounce';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useDrawer from './useDrawer';

const mPlacements = Object.freeze({
  left: 'fdrawer-backdrop-left',
  right: 'fdrawer-backdrop-right',
});

const Drawer = ({ className, isOpen, placement, ...otherProps }) => {
  const delayOpen = useDebounce(isOpen, 100);
  useLockBodyScroll(delayOpen);

  const animationClass = useMemo(() => {
    if (placement === 'right') {
      return isOpen ? 'slideInRight animated faster' : 'slideOutRight animated faster';
    }

    if (placement === 'left') {
      return isOpen ? 'slideInLeft animated faster' : 'slideOutLeft animated faster';
    }

    return 'slideInRight animated faster';
  }, [isOpen, placement]);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <Dialog.Backdrop
            className={cn(
              'fdrawer-backdrop',
              mPlacements[placement],
            )}
          >
            <Dialog
              className={cn('fdrawer', animationClass, className)}
              {...otherProps}
            />
          </Dialog.Backdrop>
        </Portal>
      )}
    </React.Fragment>
  );
};

Drawer.useDrawer = useDrawer;
Drawer.Header = Dialog.Header;
Drawer.Body = Dialog.Body;
Drawer.Footer = Dialog.Footer;
Drawer.Closer = Dialog.Closer;

Drawer.displayName = 'Drawer';
Drawer.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  placement: PropTypes.string,
  children: PropTypes.any,
};
Drawer.defaultProps = {
  placement: 'right'
};

export default Drawer;
