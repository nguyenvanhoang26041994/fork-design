import { useState, useMemo, useCallback } from 'react';
import { reduce, debounce, trim } from 'lodash';

const useStaticCommon = (props, {
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

export default useStaticCommon;
