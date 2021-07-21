import { useMemo } from 'react';
import { pick } from 'lodash';

import useCommonSelectValue from './useCommonSelectValue';
import useCommonUIRef from './useCommonUIRef';
import useStaticUIRef from './useStaticUIRef';
import useCommonSingleSelect from './useCommonSingleSelect';
import useRestNativeProps from './useRestNativeProps';

const useSingleSelect = (props, ref) => {
  const {
    isControlled,
    value,
    setValue,
  } = useCommonSelectValue(props, ref);
  const {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  } = useCommonUIRef();
  const {
    searchText,
    setSearchText,
    searchRegex,
    _options,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  } = useStaticUIRef(props, {
    searchboxRef,
    setUIActive,
  });

  const selectedOption = useMemo(() => _options[value], [_options, value]);

  const {
    localRef,
    hideOverlay,
  } = useCommonSingleSelect(props, {
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
