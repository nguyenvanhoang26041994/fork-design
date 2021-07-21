import { useCallback, useEffect } from 'react';

const useSingleCommon = (props, {
  UIRef,
  value,
  selectedOption,
  localRef,
}) => {
  // force to hide overlay when user select option
  const hideOverlay = useCallback(() => UIRef.current._tippy.hide(), [UIRef]);

  useEffect(() => {
    if (localRef.current.isRendered && localRef.current.prevValue !== value) {
      props.onChanged(value);
    }
    localRef.current.prevValue = value;
    localRef.current.isRendered = true;
  }, [value, selectedOption, props.onChanged]);

  return {
    localRef,
    hideOverlay,
  };
};

export default useSingleCommon;
