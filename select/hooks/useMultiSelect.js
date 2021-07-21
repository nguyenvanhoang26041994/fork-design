import { useMemo, useRef } from 'react';

import useCommon from './useCommon';
import useMultipleCommon from './useMultipleCommon';
import useStaticCommon from './useStaticCommon';

const useMultiSelect = (props, ref) => {
  const localRef = useRef({
    isRendered: false,
    prevValue: null,
  });
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
    localRef,
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

  // selected options(map to array value but contain more information such as name, avatar, ...etc)
  const selectedOptions = useMemo(() => {
    return value.map((item) => {
      return _options[item];
    });
  }, [_options, value]);

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
    selectedOptions,
  };
};

export default useMultiSelect;
