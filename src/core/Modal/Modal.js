import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Dialog from '../Dialog';
import useModal from './useModal';
import useDebounce from '../../hooks/useDebounce';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useModalMeansure from './useModalMeansure';

const Modal = ({
  className,
  isOpen,
  style,
  centered,
  margin,
  onOutsideClick,
  ...otherProps
}) => {
  const delayOpen = useDebounce(isOpen, 100);
  useLockBodyScroll(isOpen);
  const {
    modalRef,
    portalRef,
    modalStyle,
  } = useModalMeansure(isOpen, style, { centered, margin });

  const onBackdropClick = useCallback((e) => {
    if (onOutsideClick && modalRef.current && !modalRef.current.contains(e.target)) {
      onOutsideClick(e);
    }
  }, [modalRef, onOutsideClick]);

  return (
    <>
      {delayOpen && (
        <Portal>
          <Dialog.Backdrop className="fmodal-backdrop" ref={portalRef} onClick={onBackdropClick}>
            <Dialog
              className={cn('fmodal', className)}
              style={modalStyle}
              ref={modalRef}
              {...otherProps}
            />
          </Dialog.Backdrop>
        </Portal>
      )}
    </>
  );
};

Modal.useModal = useModal;
Modal.Header = Dialog.Header;
Modal.Body = Dialog.Body;
Modal.Footer = Dialog.Footer;
Modal.Header = Dialog.Header;
Modal.Closer = Dialog.Closer;

Modal.displayName = 'Modal';
Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};
Modal.defaultProps = {
  margin: 10,
  style: {},
};

export default Modal;
