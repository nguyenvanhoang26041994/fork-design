import React, { useState, useCallback, useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { omit, reduce } from 'lodash';

import UISelect from '../../core/Select';
import Loader from '../../core/Loader';
import Chip from '../../core/Chip';

import useAsyncMultiSelect from '../hooks/useAsyncMultiSelect';

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
    localRef,
    displayOptions,
    loaders,
    _onBottomIntersecting,
    onShown,
    onDebouceSearchboxChange,
    selectedOptions,
  } = useAsyncMultiSelect(props, ref);

  useEffect(() => {
    if (localRef.current.isRendered && localRef.current.prevValue !== value) {
      onChanged(value);
    }

    localRef.current.prevValue = value;
    localRef.current.isRendered = true;
  }, [value, onChanged]);

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
  } = props;

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
