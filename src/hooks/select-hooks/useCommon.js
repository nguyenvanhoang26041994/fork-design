import {
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
} from 'react';
import usePureMeansure from '../usePureMeansure';

const useCommon = (props, ref) => {
  const isControlled = useRef('value' in props);

  // value - similar to select native
  const [value, setValue] = isControlled.current
    ? [props.value, props.setValue]
    : useState(props.defaultValue);

  const searchboxRef = useRef(); // searchbox
  const UIRef = useRef();
  const bounds = usePureMeansure(UIRef);
  const [UIActive, setUIActive] = useState(false);
  const onHidden = useCallback(() => setUIActive(false), [setUIActive]);
  
  // Export controlled to outside of component
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
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  };
};

export default useCommon;
