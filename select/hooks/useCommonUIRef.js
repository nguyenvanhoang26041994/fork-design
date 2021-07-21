import { useRef, useState, useCallback } from 'react';
import usePureMeansure from '../../hooks/usePureMeansure';

const useCommonUIRef = () => {
  const searchboxRef = useRef(); // searchbox
  const UIRef = useRef();
  const bounds = usePureMeansure(UIRef);
  const [UIActive, setUIActive] = useState(false);
  const onHidden = useCallback(() => setUIActive(false), [setUIActive]);

  return {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  };
};

export default useCommonUIRef;
