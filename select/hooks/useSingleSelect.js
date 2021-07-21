import { useMemo } from 'react';

import useRestNativeProps from './useRestNativeProps';

import useCommon from './useCommon';
import useSingleCommon from './useSingleCommon';
import useStaticCommon from './useStaticCommon';

const useSingleSelect = (props, ref) => {
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

  const selectedOption = useMemo(() => _options[value], [_options, value]);

  const {
    localRef,
    hideOverlay,
  } = useSingleCommon(props, {
    UIRef,
    value,
    selectedOption,
  });

  const restNativeProps = useRestNativeProps(props);
  const UIProps = {
    ref: UIRef,
    active: UIActive,
    ...restNativeProps
  };
  const searchboxProps = {
    ref: searchboxRef,
    onChange: onDebouceSearchboxChange,
  };

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
    searchText,
    setSearchText,
    searchRegex,
    _options,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
    selectedOption,
    localRef,
    hideOverlay,
    UIProps,
    searchboxProps,
  };
};

export default useSingleSelect;
