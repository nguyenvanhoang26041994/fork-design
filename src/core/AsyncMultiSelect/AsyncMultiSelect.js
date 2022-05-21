import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import UISelect from '../UISelect';
import Loader from '../Loader';
import Chip from '../Chip';

import useAsyncMultiSelect from '../../hooks/select-hooks/useAsyncMultiSelect';

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
    bounds,
    onHidden,
    _value,
    removeSingleValue,
    toggleSingleValue,
    onClickOutside,
    displayOptions,
    loaders,
    _onBottomIntersecting,
    onShown,
    selectedOptions,
    UIProps,
    searchboxProps,
  } = useAsyncMultiSelect(props, ref);

  const {
    render,
    renderSearchbox,
    children,
    valueKey,
    nameKey,
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
                  ? AsyncMultiSelect.renderSearchbox(searchboxProps)
                  : renderSearchbox(searchboxProps)
                }
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
        {render(UIProps, selectedOptions, {
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
