import { useState, useEffect } from 'react';

import useRestNativeProps from './useRestNativeProps';

import useCommon from './useCommon';
import useSingleCommon from './useSingleCommon';
import useAsyncCommon from './useAsyncCommon';

const useAsyncSingleSelect = (props, ref) => {
  const localRef = useRef({
    isLoadOptionsFirstTimeDone: false,
    isRendered: false,
    prevValue: null,
    observer: null,
    options: {}, // caching options
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
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
  } = useAsyncCommon(props, {
    localRef,
    searchboxRef,
    setUIActive,
  });

  // selected option(mapping to the value but contain more infomation to display in UI such as name, avatar, ..etc)
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    hideOverlay,
  } = useSingleCommon(props, {
    localRef,
    UIRef,
    value,
    selectedOption,
  });

  // make cache selected option
  useEffect(() => {
    if (selectedOption) {
      localRef.current.options[selectedOption[props.valueKey]] = selectedOption;
    }
    displayOptions.map((option) => {
      localRef.current.options[option[props.valueKey]] = option;
    });
  }, [props.valueKey, selectedOption, displayOptions]);

  useEffect(() => {
    if (localRef.current.options[value]) {
      setSelectedOption(localRef.current.options[value]);
    } else {
      setLoaders(prev => ({
        ...prev,
        isSelectedLoading: true,
        isSelectedSuccess: false,
        isSelectedFailure: false,
      }));
      props.getOption({
        selectedValue: value,
      }).then((option) => {
        setLoaders(prev => ({
          ...prev,
          isSelectedLoading: false,
          isSelectedSuccess: true,
          isSelectedFailure: false,
        }));
        setSelectedOption(option);
      }).catch(() => {
        setLoaders(prev => ({
          ...prev,
          isSelectedLoading: false,
          isSelectedSuccess: false,
          isSelectedFailure: true,
        }));
      });
    }
  }, [value, setLoaders, props.getOption, setSelectedOption]);

  const restNativeProps = useRestNativeProps(props);
  const UIProps = {
    ref: UIRef,
    active: UIActive,
    loading: loaders.isSelectedLoading,
    ...restNativeProps
  };
  const searchboxProps = {
    ref: searchboxRef,
    onChange: onDebouceSearchboxChange,
    loading: !loaders.isFirstOptionsLoading && loaders.isOptionsLoading,
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
    localRef,
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
    selectedOption,
    setSelectedOption,
    hideOverlay,
    UIProps,
    searchboxProps,
  };
};

export default useAsyncSingleSelect;
