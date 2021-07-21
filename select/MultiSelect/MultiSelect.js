import React, { useRef, useCallback, useContext, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { omit, reduce, map } from 'lodash';

import UISelect from '../../core/Select';
import Chip from '../../core/Chip';
import { useMultiSelect } from '../hooks';

const { Overlay, OverlayHeader, OverlayBody, Option, Multiple, Searchbox } = UISelect;
const Context = React.createContext({
  selectedOptions: null,
  value: [],
  setValue: f => f,
  toggleSingleValue: f => f,
  removeSingleValue: f => f,
  filter: f => f,
  searchText: '',
  searchRegex: null,
  computed: {
    _value: {},
  },
});

const MultiSelect = React.forwardRef((props, ref) => {
  const {
    value,
    setValue,
    searchboxRef,
    UIRef,
    bounds,
    UIActive,
    onHidden,
     _value,
    removeSingleValue,
    toggleSingleValue,
    onClickOutside,
    onMultipleClick,
    searchText,
    searchRegex,
    _options,
    onShown,
    onDebouceSearchboxChange,
  } = useMultiSelect(props, ref);

  const {
    render,
    renderSearchbox,
    onChanged,
    filter,
    delay,
    children,
    ...otherProps
  } = props;

  const localRef = useRef({
    isRendered: false,
    prevValue: null,
  });

  // selected options(map to array value but contain more information such as name, avatar, ...etc)
  const selectedOptions = useMemo(() => {
    return map(value, (item) => {
      return _options[item];
    });
  }, [_options, value]);

  useEffect(() => {
    if (localRef.current.isRendered && localRef.current.prevValue !== value) {
      onChanged(value);
    }
    localRef.current.prevValue = value;
    localRef.current.isRendered = true;
  }, [value, selectedOptions, onChanged]);

  return (
    <Context.Provider value={{
      selectedOptions,
      value,
      setValue,
      toggleSingleValue,
      removeSingleValue,
      filter,
      searchText,
      searchRegex,
      computed: {
        _value,
      },
    }}>
      <UISelect
        overlay={(
          <Overlay style={{ width: bounds.width }}>
            {renderSearchbox && (
              <OverlayHeader>
                {typeof renderSearchbox === 'boolean'
                ? MultiSelect.renderSearchbox({
                  ref: searchboxRef,
                  onChange: onDebouceSearchboxChange,
                }) : renderSearchbox({
                  ref: searchboxRef,
                  onChange: onDebouceSearchboxChange,
                })}
              </OverlayHeader>
            )}
            <OverlayBody>
              {children}
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
          onClick: onMultipleClick
        }, selectedOptions)}
      </UISelect>
    </Context.Provider>
  );
});

MultiSelect.Multiple = Multiple;
MultiSelect.renderSearchbox = props => <MultiSelect.Searchbox {...props} />;
MultiSelect.displayName = 'MultiSelect';
MultiSelect.propTypes = {};
MultiSelect.defaultProps = {
  delay: 200,
  onChanged: f => f,
  setValue: f => f,
  defaultValue: [],

  // default render the main UI
  render: (props, selectedOptions) => (
    <MultiSelect.Multiple {...props}>
      {selectedOptions.map((optionProps) => (
        <MultiSelect.Chip closable key={optionProps.value} value={optionProps.value}>
          {optionProps.children}
        </MultiSelect.Chip>
      ))}
    </MultiSelect.Multiple>
  ),

  // render searchbox
  // set true will render default searchbox
  // callback when you want custom the searchbox
  renderSearchbox: false,

  // the logic to show/hide display option 
  filter: (props, { searchRegex }) => {
    if (typeof props.children === 'string') {
      return searchRegex.test(props.children);
    }

    return !!props.children;
  },
};

MultiSelect.Chip = ({ value, ...otherProps }) => {
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

MultiSelect.Option = ({ value, ...otherProps }) => {
  const {
    toggleSingleValue,
    filter,
    searchText,
    searchRegex,
    computed: {
      _value,
    },
  } = useContext(Context);
  const onClick = useCallback(() => {
    toggleSingleValue(value);
  }, [value, toggleSingleValue]);

  const hide = useMemo(() => !filter({
    value,
    ...otherProps
  }, {
    searchText,
    searchRegex
  }), [
    value,
    otherProps,
    filter,
    searchText,
    searchRegex,
  ]);

  const _otherProps = useMemo(() => omit(otherProps, ['data']), [otherProps]);
  return (
    <Option
      onClick={onClick}
      active={_value[value]}
      hide={hide}
      {..._otherProps}
    />
  );
};
MultiSelect.Option.defaultProps = {
  value: '',
};

MultiSelect.Searchbox = Searchbox;
export default MultiSelect;
