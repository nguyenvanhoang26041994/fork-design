import { useRef, useState, useEffect } from 'react';
import { reduce } from 'lodash';

import useCommon from './useCommon';
import useMultipleCommon from './useMultipleCommon';
import useAsyncCommon from './useAsyncCommon';

const useAsyncMultiSelect = (props, ref) => {
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
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  } = useAsyncCommon(props, {
    localRef,
    searchboxRef,
    setUIActive,
  });

  // selected option(mapping to the value but contain more infomation to display in UI such as name, avatar, ..etc)
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Caching display options and selected options
  useEffect(() => {
    selectedOptions.map((option) => {
      localRef.current.options[option[props.valueKey]] = option;
    });
    displayOptions.map((option) => {
      localRef.current.options[option[props.valueKey]] = option;
    });
  }, [selectedOptions, displayOptions, props.valueKey]);

  // watch value change
  localRef.current.setLoaders = setLoaders;
  localRef.current.getOptionsByValue = props.getOptionsByValue;
  localRef.current.setSelectedOptions = setSelectedOptions;
  localRef.current.valueKey = props.valueKey;
  useEffect(() => {
    let nextSelectedOptions = [];
    const valueDontHaveOptionYet = [];
    for (let i = 0; i < value.length; i++) {
      const key = value[i];
      const optionFromCache = localRef.current.options[key];
      if (optionFromCache) {
        nextSelectedOptions.push(optionFromCache)
      } else {
        nextSelectedOptions.push(key);
        valueDontHaveOptionYet.push(key);
      }
    }

    if (!valueDontHaveOptionYet.length) {
      localRef.current.setSelectedOptions(nextSelectedOptions);
    } else {
      localRef.current.setLoaders(prev => ({
        ...prev,
        isSelectedLoading: true,
        isSelectedSuccess: false,
        isSelectedFailure: false,
      }));
      localRef.current.getOptionsByValue({
        selectedValue: valueDontHaveOptionYet,
      }).then((options) => {
        localRef.current.setLoaders(prev => ({
          ...prev,
          isSelectedLoading: false,
          isSelectedSuccess: true,
          isSelectedFailure: false,
        }));
        const _options = reduce(options, (rs, option) => {
          rs[option[localRef.current.valueKey]] = option;
          return rs;
        }, {});
        nextSelectedOptions = nextSelectedOptions.map((option) => {
          if (typeof option === 'object') {
            return option;
          }
          return _options[option];
        });
        localRef.current.setSelectedOptions(nextSelectedOptions);
      }).catch(() => {
        localRef.current.setLoaders(prev => ({
          ...prev,
          isSelectedLoading: false,
          isSelectedSuccess: false,
          isSelectedFailure: true,
        }));
      });
    }
  }, [value]);

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
    selectedOptions,
    setSelectedOptions,
  };
};

export default useAsyncMultiSelect;
