import { useCallback, useMemo, useEffect } from 'react';
import reduce from 'lodash/reduce';

const useMultipleCommon = (props, {
  localRef,
  value,
  setValue,
  UIRef,
}) => {
  // Still value but in object shape
  const _value = useMemo(() => reduce(value, (rs, item) => {
      rs[item] = true;
      return rs;
    }, {}), [value]);

  // remove one item from array value
  const removeSingleValue = useCallback((singleValue) => {
    setValue(prev => prev.filter(item => item !== singleValue));
  }, [setValue]);

  // toogle(remove or add) one item from array value
  const toggleSingleValue = useCallback((singleValue) => {
    setValue((prev) => {
      const next = [];
      let isPrevContained = false;
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] === singleValue) {
          isPrevContained = true;
          continue;
        }

        if (prev[i] !== singleValue) {
          next.push(prev[i]);
          continue;
        }
      }

      if (!isPrevContained) {
        next.push(singleValue);
      }

      return next;
    });
  }, [setValue]);

  // manual controlled show/hide overlay
  const onMultipleClick = useCallback((e) => {
    if (e.isDefaultPrevented()) {
      return false;
    }
    if (UIRef.current._tippy.state.isVisible) {
      return UIRef.current._tippy.hide();
    } 
      return UIRef.current._tippy.show();
    
  }, []);

  const onClickOutside = useCallback(instance => instance.hide(), []);

  localRef.current.onChanged = props.onChanged;
  useEffect(() => {
    if (localRef.current.isRendered) {
      localRef.current.onChanged(value);
    }
    localRef.current.prevValue = value;
    localRef.current.isRendered = true;
  }, [value]);

  return {
    _value,
    removeSingleValue,
    toggleSingleValue,
    onClickOutside,
    onMultipleClick,
  };
};

export default useMultipleCommon;
