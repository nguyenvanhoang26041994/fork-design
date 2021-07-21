import useCommon from './useCommon';
import useMultipleCommon from './useMultipleCommon';
import useAsyncCommon from './useAsyncCommon';

import useAsyncUIRef from './useAsyncUIRef';

const useAsyncMultiSelect = (props, ref) => {
  const {
    isControlled,
    value,
    setValue,
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  } = useCommon(props, ref);
  const {
    _value,
    removeSingleValue,
    toggleSingleValue,
    onClickOutside,
    onMultipleClick,
  } = useMultipleCommon(props, {
    value,
    setValue,
    UIRef,
  });

  const {
    localRef,
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
  } = useAsyncCommon(props, {
    searchboxRef,
  });

  const {
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  } = useAsyncUIRef(props, {
    localRef,
    searchboxRef,
    setUIActive,
    setLoaders,
    setDisplayOptions,
  });

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
    _value,
    removeSingleValue,
    toggleSingleValue,
    onClickOutside,
    onMultipleClick,
    localRef,
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  };
};

export default useAsyncMultiSelect;
