import React, { useRef, useState, useCallback, useContext, useEffect, useMemo, useImperativeHandle } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { omit, debounce, trim, reduce } from 'lodash';

import UISelect from '../../core/Select';
import Loader from '../../core/Loader';
import Chip from '../../core/Chip';
import {
  useCommonSelectValue,
  useCommonMultiSelectUIRef,
  useCommonAsyncSelect,
  useAsyncUIRef,
} from '../hooks';

const { Overlay, OverlayHeader, OverlayBody, Option, Multiple, Searchbox } = UISelect;
const Context = React.createContext({
  value: [],
  toggleSingleValue: f => f,
  removeSingleValue: f => f,
  computed: {
    _value: {},
  },
});

const AsyncMultiSelect = React.forwardRef((props, ref) => {
  const {
    value,
    setValue,
    omitProps,
  } = useCommonSelectValue(props);
  const {
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
    onClickOutside,
    onMultipleClick,
  } = useCommonMultiSelectUIRef();

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
    onDebouceSearchboxChange,
  } = useAsyncUIRef(props, {
    localRef,
    searchboxRef,
    setUIActive,
    setLoaders,
    setDisplayOptions,
  });

  const {
    render,
    renderSearchbox,
    onChanged,
    delay,
    children,
    getOptionsByValue,
    getOptions,
    onBottomIntersecting,
    valueKey,
    nameKey,
    ...otherProps
  } = omitProps;

  // Still value but in object shape
  const _value = useMemo(() => {
    return reduce(value, (rs, item) => {
      rs[item] = true;
      return rs;
    }, {})
  }, [value]);

  // remove one item from array value
  const removeSingleValue = useCallback((singleValue) => {
    setValue(prev => prev.filter(item => {
      return item !== singleValue;
    }));
  }, [setValue]);

  // toogle(remove or add) one item from array value
  const toggleSingleValue = useCallback((singleValue) => {
    setValue((prev) => {
      const next = [];
      let isPrevContained = false;
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] === singleValue) {
          isPrevContained = true;
          continue;
        }

        if (prev[i] !== singleValue) {
          next.push(prev[i]);
          continue;
        }
      }

      if (!isPrevContained) {
        next.push(singleValue);
      }

      return next;
    });
  }, [setValue]);

  // selected option(mapping to the value but contain more infomation to display in UI such as name, avatar, ..etc)
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    selectedOptions.map((option) => {
      localRef.current.options[option[valueKey]] = option;
    });
    displayOptions.map((option) => {
      localRef.current.options[option[valueKey]] = option;
    });
  }, [selectedOptions, displayOptions, valueKey]);

  localRef.current.setLoaders = setLoaders;
  localRef.current.getOptionsByValue = getOptionsByValue;
  localRef.current.setSelectedOptions = setSelectedOptions;
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
          rs[option[valueKey]] = option;
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

  useEffect(() => {
    if (localRef.current.isRendered && localRef.current.prevValue !== value) {
      onChanged(value);
    }

    localRef.current.prevValue = value;
    localRef.current.isRendered = true;
  }, [value, onChanged]);

  return (
    <Context.Provider value={{
      value,
      toggleSingleValue,
      removeSingleValue,
      computed: {
        _value,
      }
    }}>
      <UISelect
        overlay={(
          <Overlay style={{ width: bounds.width }}>
            {renderSearchbox && (
              <OverlayHeader>
                {typeof renderSearchbox === 'boolean'
                ? AsyncMultiSelect.renderSearchbox({
                  ref: searchboxRef,
                  onChange: onDebouceSearchboxChange,
                  loading: !loaders.isFirstOptionsLoading && loaders.isOptionsLoading,
                }) : renderSearchbox({
                  ref: searchboxRef,
                  onChange: onDebouceSearchboxChange,
                  loading: !loaders.isFirstOptionsLoading && loaders.isOptionsLoading,
                })}
              </OverlayHeader>
            )}
            <OverlayBody onBottomIntersecting={_onBottomIntersecting}>
              {loaders.isFirstOptionsLoading
                ? (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}>
                    <Loader.Spinner />
                  </div>
                ) : displayOptions.map((option, index) => {
                  return children({
                    key: option[valueKey],
                    value: option[valueKey],
                    data: option,
                    children: option[nameKey]
                  }, option, index);
                })}
            </OverlayBody>
          </Overlay>
        )}
        onShown={onShown}
        onHidden={onHidden}
        hideOnClick={false}
        trigger="manual"
        onClickOutside={onClickOutside}
      >
        {render({
          ...otherProps,
          ref: UIRef,
          active: UIActive,
          onClick: onMultipleClick,
          loading: loaders.isSelectedLoading,
        }, selectedOptions, {
          valueKey,
          nameKey,
        })}
      </UISelect>
    </Context.Provider>
  );
});



AsyncMultiSelect.Multiple = Multiple;
AsyncMultiSelect.renderSearchbox = props => <AsyncMultiSelect.Searchbox {...props} />;
AsyncMultiSelect.displayName = 'AsyncMultiSelect';
AsyncMultiSelect.propTypes = {
  valueKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
};
AsyncMultiSelect.defaultProps = {
  delay: 200,
  onChanged: f => f,
  setValue: f => f,
  defaultValue: [],

  children: props => <AsyncMultiSelect.Option {...props} />,

  // default render the main UI
  render: (props, selectedOptions, { valueKey, nameKey }) => (
    <AsyncMultiSelect.Multiple {...props}>
      {selectedOptions.map((option) => (
        <AsyncMultiSelect.Chip closable key={option[valueKey]} value={option[valueKey]}>
          {option[nameKey]}
        </AsyncMultiSelect.Chip>
      ))}
    </AsyncMultiSelect.Multiple>
  ),

  // render searchbox
  // set true will render default searchbox
  // callback when you want custom the searchbox
  renderSearchbox: false,
};

AsyncMultiSelect.Chip = ({ value, ...otherProps }) => {
  const { removeSingleValue } = useContext(Context);
  const onClick = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onClose = useCallback(() => {
    removeSingleValue(value);
  }, [removeSingleValue, value]);

  return (
    <Chip
      onClick={onClick}
      onClose={onClose}
      {...otherProps}
    />
  );
};

AsyncMultiSelect.Option = ({ value, ...otherProps }) => {
  const {
    toggleSingleValue,
    computed: {
      _value,
    },
  } = useContext(Context);
  const onClick = useCallback(() => {
    toggleSingleValue(value);
  }, [value, toggleSingleValue]);

  const _otherProps = useMemo(() => omit(otherProps, ['data']), [otherProps]);
  return (
    <Option
      onClick={onClick}
      active={_value[value]}
      {..._otherProps}
    />
  );
};
AsyncMultiSelect.Option.defaultProps = {
  value: '',
};

AsyncMultiSelect.Searchbox = Searchbox;
export default AsyncMultiSelect;
