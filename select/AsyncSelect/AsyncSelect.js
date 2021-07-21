import React, { useRef, useState, useCallback, useContext, useEffect, useMemo, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { debounce, omit, trim } from 'lodash';

import UISelect from '../../core/Select';
import Loader from '../../core/Loader';
import { useAsyncSingleSelect } from '../hooks';

const { Overlay, OverlayHeader, OverlayBody, Option, Single, Searchbox } = UISelect;

const Context = React.createContext({
  setSelectedOption: f => f,
  value: null,
  hideOverlay: f => f,
});

/**
 * Select support both controlled component and uncontrolled component
 */
const AsyncSelect = React.forwardRef((props, ref) => {
  const {
    value,
    setValue,
    bounds,
    onHidden,
    displayOptions,
    loaders,
    _onBottomIntersecting,
    onShown,
    selectedOption,
    hideOverlay,
    UIProps,
    searchboxProps,
  } = useAsyncSingleSelect(props, ref);

  const {
    render,
    renderSearchbox,
    children,
    valueKey,
    nameKey,
  } = props;

  return (
    <Context.Provider value={{
      setValue,
      value,
      hideOverlay,
    }}>
      <UISelect
        overlay={(
          <Overlay style={{ width: bounds.width }}>
            {renderSearchbox && (
              <OverlayHeader>
                {typeof renderSearchbox === 'boolean'
                  ? AsyncSelect.renderSearchbox(searchboxProps)
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
                    children: option[nameKey],
                  }, option, index);
                })}
            </OverlayBody>
          </Overlay>
        )}
        onShown={onShown}
        onHidden={onHidden}
      >
        {render(UIProps, selectedOption)}
      </UISelect>
    </Context.Provider>
  );
});

AsyncSelect.Single = Single;
AsyncSelect.renderSearchbox = props => <AsyncSelect.Searchbox {...props} />;
AsyncSelect.propTypes = {
  getOption: PropTypes.func.isRequired,
  getOptions: PropTypes.func.isRequired,
  valueKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
  onBottomIntersecting: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};
AsyncSelect.defaultProps = {
  delay: 500, // Delay time when you typing ing seachbox
  onChanged: f => f,
  setValue: f => f,
  children: props => <AsyncSelect.Option {...props} />,
  render: (props, selectedOption) => (
    <AsyncSelect.Single {...props}>
      {selectedOption && selectedOption.name}
    </AsyncSelect.Single>
  ),
  renderSearchbox: false,
  onBottomIntersecting: false,
};
AsyncSelect.Option = ({ value, ...otherProps}) => {
  const {
    value: currentValue,
    setValue,
    hideOverlay,
  } = useContext(Context);
  const onClick = useCallback(() => {
    setValue(value);
    hideOverlay();
  }, [value, hideOverlay, setValue]);

  const _otherProps = useMemo(() => omit(otherProps, ['data']), [otherProps]);
  return (
    <Option
      onClick={onClick}
      active={currentValue === value}
      {..._otherProps}
    />
  );
};
AsyncSelect.Option.propTypes = {
  data: PropTypes.object.isRequired,
};
AsyncSelect.Option.defaultProps = {
  value: '',
};

AsyncSelect.Searchbox = Searchbox;

export default AsyncSelect;
