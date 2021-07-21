import { useRef, useState, useMemo, useCallback, useImperativeHandle, useEffect } from 'react';
import { omit, reduce, debounce, trim } from 'lodash';

import usePureMeansure from '../hooks/usePureMeansure';

export const useCommonSelectValue = (props, ref) => {
  const isControlled = useRef('value' in props);

  // value - similar to select native
  const [value, setValue] = isControlled.current
    ? [props.value, props.setValue]
    : useState(props.defaultValue);

  const omitProps = useMemo(() => omit(props, ['value', 'setValue', 'defaultValue']));

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
    omitProps,
  };
};

export const useCommonUIRef = () => {
  const searchboxRef = useRef(); // searchbox
  const UIRef = useRef();
  const bounds = usePureMeansure(UIRef);
  const [UIActive, setUIActive] = useState(false);
  const onHidden = useCallback(() => setUIActive(false), [setUIActive]);

  return {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  };
};

export const useStaticUIRef = (props, {
  searchboxRef,
  setUIActive,
}) => {
  const [searchText, setSearchText] = useState('');
  const searchRegex = useMemo(() => new RegExp(trim(searchText), 'gi'), [searchText]);

  const onSearchboxChange = useCallback(e => setSearchText(e.target.value), [setSearchText]);
  const onDebouceSearchboxChange = useMemo(() => debounce(onSearchboxChange, props.delay), [onSearchboxChange, props.delay]);

  // display options but in object shape
  const _options = useMemo(() => {
    return reduce(props.children, (rs, item) => {
      rs[item.props.value] = item.props;
      return rs;
    }, {});
  }, [props.children]);

  const onShown = useCallback(() => {
    setUIActive(true);
    searchboxRef.current && searchboxRef.current.focus();
  }, [searchboxRef, setUIActive]);

  return {
    searchText,
    setSearchText,
    searchRegex,
    _options,
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  };
};

export const useAsyncUIRef = (props, {
  localRef,
  searchboxRef,
  setUIActive,
  setLoaders,
  setDisplayOptions,
}) => {
  const onSearchboxChange = useCallback(e => {
    setLoaders(prev => ({
      ...prev,
      isOptionsLoading: true,
      isOptionsSuccess: false,
      isOptionsFailure: false,
    }));
    props.getOptions({
      searchText: trim(e.target.value),
    }).then((options) => {
      setLoaders(prev => ({
        ...prev,
        isOptionsLoading: false,
        isOptionsSuccess: true,
        isOptionsFailure: false,
      }));
      setDisplayOptions(options);
    }).catch(() => {
      setLoaders(prev => ({
        ...prev,
        isOptionsLoading: false,
        isOptionsSuccess: false,
        isOptionsFailure: true,
      }));
    });
  }, [props.getOptions, setLoaders, setDisplayOptions]);

  const onDebouceSearchboxChange = useMemo(() => debounce(onSearchboxChange, props.delay), [onSearchboxChange, props.delay]);

      // loading display options for first time user open the overlay that contain display options.
    // it mean we don't need to load list display options when we don't need it yet
  const onShown = useCallback(() => {
    setUIActive(true);
    searchboxRef.current && searchboxRef.current.focus();
    if (!localRef.current.isLoadOptionsFirstTimeDone) {
      setLoaders(prev => ({
        ...prev,
        isOptionsLoading: true,
        isOptionsSuccess: false,
        isOptionsFailure: false,
      }));
      props.getOptions({
        searchText: searchboxRef.current ? trim(searchboxRef.current.value) : '',
      }).then((options) => {
        setLoaders(prev => ({
          ...prev,
          isFirstOptionsLoading: false,
          isOptionsLoading: false,
          isOptionsSuccess: true,
          isOptionsFailure: false,
        }));
        setDisplayOptions(options);
      }).catch(() => {
        setLoaders(prev => ({
          ...prev,
          isFirstOptionsLoading: false,
          isOptionsLoading: false,
          isOptionsSuccess: false,
          isOptionsFailure: true,
        }));
      });
      localRef.current.isLoadOptionsFirstTimeDone = true;
    }
  }, [
    searchboxRef,
    setUIActive,
    props.getOptions,
    setLoaders,
    setDisplayOptions,
  ]);

  return {
    onShown,
    onSearchboxChange,
    onDebouceSearchboxChange,
  };
};

export const useCommonMultiSelectUIRef = () => {
  const {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
  } = useCommonUIRef();

  // manual controlled show/hide overlay
  const onMultipleClick = useCallback((e) => {
    if (e.isDefaultPrevented()) {
      return false;
    }
    if (UIRef.current._tippy.state.isVisible) {
      return UIRef.current._tippy.hide();
    } else {
      return UIRef.current._tippy.show();
    }
  }, []);

  const onClickOutside = useCallback(instance => instance.hide(), []);

  return {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
    onClickOutside,
    onMultipleClick,
  };
};

export const useCommonAsyncSelect = (props, {
  searchboxRef,
}) => {
  const localRef = useRef({
    isLoadOptionsFirstTimeDone: false,
    isRendered: false,
    prevValue: null,
    observer: null,
    options: {}, // caching options
  });

  const [displayOptions, setDisplayOptions] = useState([]);
  const [loaders, setLoaders] = useState({
    isFirstOptionsLoading: true, // the loading for first time component load display options
    isSelectedLoading: false,
    isSelectedSuccess: false,
    isSelectedFailure: false,
    isOptionsLoading: false,
    isOptionsSuccess: false,
    isOptionsFailure: false,
  });

  const _onBottomIntersecting = useMemo(() => {
    if (!props.onBottomIntersecting) {
      return false;
    }
    return () => {
      if (!localRef.current.isLoadOptionsFirstTimeDone) {
        return false;
      }
      return props.onBottomIntersecting({
        searchText: searchboxRef.current ? trim(searchboxRef.current.value) : '',
        setDisplayOptions,
      });
    }
  }, [props.onBottomIntersecting, setDisplayOptions]);

  return {
    localRef,
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
  };
};

export const useCommonSingleSelect = (props, {
  UIRef,
  value,
  selectedOption,
  localRef: _localRef,
}) => {
  const localRef = _localRef || useRef({
    isRendered: false,
    prevValue: null,
  });
  // force to hide overlay when user select option
  const hideOverlay = useCallback(() => UIRef.current._tippy.hide(), [UIRef]);

  useEffect(() => {
    if (localRef.current.isRendered && localRef.current.prevValue !== value) {
      props.onChanged(value);
    }
    localRef.current.prevValue = value;
    localRef.current.isRendered = true;
  }, [value, selectedOption, props.onChanged]);

  return {
    localRef,
    hideOverlay,
  };
};

export const useSingleSelect = (props, ref) => {
  const {
    isControlled,
    value,
    setValue,
    omitProps,
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

  const {
    render,
    renderSearchbox,
    onChanged,
    filter,
    delay,
    children,
    ...otherProps
  } = omitProps;

  return {
    isControlled,
    value,
    setValue,
    omitProps,
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
    render,
    renderSearchbox,
    onChanged,
    filter,
    delay,
    children,
    otherProps,
  };
};

export const useAsyncSingleSelect = (props, ref) => {
  const {
    isControlled,
    value,
    setValue,
    omitProps,
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
    localRef,
    displayOptions,
    setDisplayOptions,
    loaders,
    setLoaders,
    _onBottomIntersecting,
  } = useCommonAsyncSelect(props, {
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

  // selected option(mapping to the value but contain more infomation to display in UI such as name, avatar, ..etc)
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    hideOverlay,
  } = useCommonSingleSelect(props, {
    UIRef,
    value,
    selectedOption,
    localRef,
  });

  const {
    render,
    renderSearchbox,
    onChanged,
    delay,
    children,
    getOptions,
    getOption,
    onBottomIntersecting,
    valueKey,
    nameKey,
    ...otherProps
  } = omitProps;

  // make cache selected option
  useEffect(() => {
    if (selectedOption) {
      localRef.current.options[selectedOption[valueKey]] = selectedOption;
    }
    displayOptions.map((option) => {
      localRef.current.options[option[valueKey]] = option;
    });
  }, [valueKey, selectedOption, displayOptions]);

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

  return {
    isControlled,
    value,
    setValue,
    omitProps,
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
    render,
    renderSearchbox,
    onChanged,
    delay,
    children,
    getOptions,
    getOption,
    onBottomIntersecting,
    valueKey,
    nameKey,
    otherProps
  };
};