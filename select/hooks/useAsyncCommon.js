import { useState, useMemo, useCallback } from 'react';
import { trim, debounce } from 'lodash';

/**
 * 
 * @param {*} props 
 * @param {*} param1 
 * USING for AsyncSelect and AsycnMultiSelect
 */
const useAsyncCommon = (props, {
  searchboxRef,
  setUIActive,
  localRef,
}) => {
  const [displayOptions, setDisplayOptions] = useState([]); // list display options
  const [loaders, setLoaders] = useState({
    isFirstOptionsLoading: true, // the loading for first time component load display options
    isSelectedLoading: false,
    isSelectedSuccess: false,
    isSelectedFailure: false,
    isOptionsLoading: false,
    isOptionsSuccess: false,
    isOptionsFailure: false,
  });

  // when user scroll to the bottom of display options list will trigger this callback
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

  // callback when user typing in searchbox
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

export default useAsyncCommon;
