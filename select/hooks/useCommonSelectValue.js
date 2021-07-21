import { useRef, useState, useImperativeHandle } from 'react';

const useCommonSelectValue = (props, ref) => {
  const isControlled = useRef('value' in props);

  // value - similar to select native
  const [value, setValue] = isControlled.current
    ? [props.value, props.setValue]
    : useState(props.defaultValue);

  useImperativeHandle(ref, () => ({
    value,
    _select: {
      value,
      setValue,
    },
  }), [
    value,
    setValue,
  ]);

  return {
    isControlled,
    value,
    setValue,
  };
};

export default useCommonSelectValue;
