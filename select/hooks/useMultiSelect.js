import useCommon from './useCommon';
import useMultipleCommon from './useMultipleCommon';
import useStaticCommon from './useStaticCommon';

const useMultiSelect = (props, ref) => {
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
    searchText,
    setSearchText,
    searchRegex,
    _options,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  } = useStaticCommon(props, {
    searchboxRef,
    setUIActive,
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
    searchText,
    setSearchText,
    searchRegex,
    _options,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  };
};

export default useMultiSelect;
