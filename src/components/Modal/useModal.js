import { useState, useCallback } from 'react';
import useRefresh from '../../hooks/useRefresh';

const useModal = (defaultIsOpen) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const { isOpenFresh, setIsOpenFresh, doRefresh } = useRefresh();

  const doOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
  const doClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const doToggle = useCallback(() => setIsOpen(val => !val), [setIsOpen]);

  return {
    isOpen,
    setIsOpen,
    doOpen,
    doClose,
    doToggle,
    isOpenFresh,
    setIsOpenFresh,
    doRefresh,
  };
};

export default useModal;
