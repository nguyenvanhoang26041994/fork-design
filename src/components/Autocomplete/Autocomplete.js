import React, {
  useContext,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';

import UIAutoComplete from '../UIAutoComplete';
import usePureMeansure from '../../hooks/usePureMeansure';
import useRestNativeProps from '../../hooks/useRestNativeProps';
import { omit, trim, debounce } from 'lodash';

const useAutoComplete = (props, ref) => {
  const inputRef = useRef();
  const UIRef = useRef();
  const bounds = usePureMeansure(UIRef);
  const [UIActive, setUIActive] = useState(false);

  const [text, setText] = useState('');
  const textRegex = useMemo(() => new RegExp(trim(text), 'gi'), [text]);

  const onTextChange = useCallback(e => setText(e.target.value), [setText]);
  const onDebouceTextChange = useMemo(() => debounce(onTextChange, props.delay), [onTextChange, props.delay]);

  const onHidden = useCallback(() => setUIActive(false), [setUIActive]);
  const onShown = useCallback(() => {
    setUIActive(true);
  }, [setUIActive]);

  // force to hide overlay when user select option
  const hideOverlay = useCallback(() => UIRef.current._tippy.hide(), [UIRef]);

  const restNativeProps = useRestNativeProps(props);
  const UIProps = {
    ref: UIRef,
    active: UIActive,
    inputRef,
    onChange: onDebouceTextChange,
    ...restNativeProps
  };

  return {
    inputRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
    text,
    setText,
    textRegex,
    onShown,
    onTextChange,
    onDebouceTextChange,
    hideOverlay,
    UIProps,
  };
};

const { Overlay, AutoCompleteInput, Option } = UIAutoComplete;
const Context = React.createContext({
  selectedOption: null,
  value: '',
  setValue: f => f,
  hideOverlay: f => f,
  filter: f => f,
  searchText: '',
  searchRegex: null,
});

const AutoComplete = React.forwardRef((props, ref) => {
  const {
    inputRef,
    UIRef,
    bounds,
    UIActive,
    setUIActive,
    onHidden,
    onShown,
    onSelect,
    hideOverlay,
    UIProps,
  } = useAutoComplete(props, ref);

  const {
    render,
    filter,
    children,
  } = props;

  return (
    <Context.Provider
      value={{
        hideOverlay,
        filter,
        onSelect,
      }}
    >
      <UIAutoComplete
        overlay={(
          <Overlay style={{ width: bounds.width }}>
            {children}
          </Overlay>
        )}
        onShown={onShown}
        onHidden={onHidden}
      >
        {render(UIProps, selectedOption)}
      </UIAutoComplete>
    </Context.Provider>
  );
});

AutoComplete.defaultProps = {
  delay: 200, // Delay time when you typing ing seachbox
  onChanged: f => f,
  // default render the main UI
  render: (props, selectedOption) => (
    <AutoComplete.Input
      {...props}
      defaultValue={selectedOption.text}
    />
  ),
  // the logic to show/hide display option
  filter: (props, { searchRegex }) => {
    if (typeof props.children === 'string') {
      return searchRegex.test(props.children);
    }

    return !!props.children;
  },
};

AutoComplete.Input = React.forwardRef((props, ref) => {
  return (
    <AutoCompleteInput ref={ref} {...props} loading />
  );
});

AutoComplete.Option = ({ value, ...otherProps }) => {
  const {
    hideOverlay,
    filter,
    onSelect,
  } = useContext(Context);
  const onClick = useCallback(() => {
    onSelect(value);
    hideOverlay();
  }, [value, setValue, hideOverlay]);

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
  ]);

  const _otherProps = useMemo(() => omit(otherProps, ['data', 'text']), [otherProps]);
  return (
    <Option
      onClick={onClick}
      hide={hide}
      {..._otherProps}
    />
  );
};
AutoComplete.Option.defaultProps = {
  value: '',
};
export default AutoComplete;
