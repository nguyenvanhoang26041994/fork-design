import React, { useCallback, useContext, useMemo } from 'react';
import omit from 'lodash/omit';

import UISelect from '../UISelect';
import useSingleSelect from '../../hooks/select-hooks/useSingleSelect';

const { Overlay, OverlayHeader, OverlayBody, Option, Single, Searchbox } = UISelect;
const Context = React.createContext({
  selectedOption: null,
  value: '',
  setValue: f => f,
  hideOverlay: f => f,
  filter: f => f,
  searchText: '',
  searchRegex: null,
});

/**
 * Select support both controlled component and uncontrolled component
 */
const Select = React.forwardRef((props, ref) => {
  const {
    value,
    setValue,
    bounds,
    onHidden,
    searchText,
    searchRegex,
    onShown,
    hideOverlay,
    selectedOption,
    UIProps,
    searchboxProps,
  } = useSingleSelect(props, ref);

  const {
    render,
    renderSearchbox,
    filter,
    children,
  } = props;

  return (
    <Context.Provider value={{
      selectedOption,
      value,
      setValue,
      hideOverlay,
      filter,
      searchText,
      searchRegex,
    }}>
      <UISelect
        overlay={(
          <Overlay style={{ width: bounds.width }}>
            {renderSearchbox && (
              <OverlayHeader>
                {typeof renderSearchbox === 'boolean'
                ? Select.renderSearchbox(searchboxProps)
                : renderSearchbox(searchboxProps)}
              </OverlayHeader>
            )}
            <OverlayBody>
              {children}
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

Select.Single = Single;
Select.renderSearchbox = props => <Select.Searchbox {...props} />;
Select.defaultProps = {
  delay: 200, // Delay time when you typing ing seachbox
  onChanged: f => f,
  setValue: f => f,

  // default render the main UI
  render: (props, selectedOption) => (
    <Select.Single {...props}>
      {selectedOption.children}
    </Select.Single>
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
Select.Option = ({ value, ...otherProps }) => {
  const {
    value: currentValue,
    setValue,
    hideOverlay,
    filter,
    searchText,
    searchRegex,
  } = useContext(Context);
  const onClick = useCallback(() => {
    setValue(value);
    hideOverlay();
  }, [value, setValue, hideOverlay]);

  const hide = useMemo(() => !filter({
    value,
    ...otherProps,
  }, {
    searchText,
    searchRegex,
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
      active={currentValue === value}
      hide={hide}
      {..._otherProps}
    />
  );
};
Select.Option.defaultProps = {
  value: '',
};

Select.Searchbox = Searchbox;
export default Select;
