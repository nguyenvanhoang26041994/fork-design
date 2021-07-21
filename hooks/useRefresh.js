
import { useState, useCallback } from 'react';

const useRefresh = (isOpen = true, delay = 1) => {
  const [isOpenFresh, setIsOpenFresh] = useState(isOpen);

  const doRefresh = useCallback(() => {
    setIsOpenFresh(false);
    setTimeout(() => setIsOpenFresh(true), delay);
  }, [setIsOpenFresh, delay]);

  return {
    isOpenFresh,
    setIsOpenFresh,
    doRefresh,
  }
};

export default useRefresh;
