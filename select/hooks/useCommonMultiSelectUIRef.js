import { useCallback } from 'react';

const useCommonMultiSelectUIRef = () => {
  const {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  } = useCommonUIRef();

  // manual controlled show/hide overlay
  const onMultipleClick = useCallback((e) => {
    if (e.isDefaultPrevented()) {
      return false;
    }
    if (UIRef.current._tippy.state.isVisible) {
      return UIRef.current._tippy.hide();
    } else {
      return UIRef.current._tippy.show();
    }
  }, []);

  const onClickOutside = useCallback(instance => instance.hide(), []);

  return {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
    onClickOutside,
    onMultipleClick,
  };
};

export default useCommonMultiSelectUIRef;
