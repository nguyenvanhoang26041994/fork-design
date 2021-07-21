import { useMemo, useCallback } from 'react';
import { debounce, trim } from 'lodash';

const useAsyncUIRef = (props, {
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

export default useAsyncUIRef;
