import { useState, useCallback } from 'react';

const useDrawer = (defaultIsOpen) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const doOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
  const doClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const doToggle = useCallback(() => setIsOpen(val => !val), [setIsOpen]);

  return {
    isOpen,
    setIsOpen,
    doOpen,
    doClose,
    doToggle,
  };
};

export default useDrawer;
