import { useRef, useState, useMemo } from 'react';
import { trim } from 'lodash';

const useAsyncCommon = (props, {
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

export default useAsyncCommon;
