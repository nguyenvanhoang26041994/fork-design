import React, { useCallback, useRef, useEffect, useState, useContext, useLayoutEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Textarea from '../Textarea';
import Textbox from '../Textbox';
import Password from '../Password';
import Select from '../Select';
import MultiSelect from '../MultiSelect';
import AsyncSelect from '../AsyncSelect';

const Context = React.createContext({
  isFocus: false,
  setFocus: f => f,
  isDisabled: false,
  setDisabled: f => f,
});

const FormField = React.forwardRef(({ className, onClick, filled, ...otherProps }, ref) => {
  const formFieldRef = ref || useRef();
  const [isFocus, setFocus] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const _onClick = useCallback((e) => {
    onClick(e);
  }, [onClick]);

  useEffect(() => {

  }, []);

  return (
    <Context.Provider
      value={{
        isFocus,
        setFocus,
        isDisabled,
        setDisabled
      }}
    >
      <div
        className={cn('fform-field', {
          'fform-field-focused': isFocus,
          'fform-field-disabled': isDisabled,
          'fform-field-filled': filled,
        }, className)}
        onClick={_onClick}
        ref={formFieldRef}
        {...otherProps}
      />
    </Context.Provider>
  );
});

FormField.defaultProps = {
  onClick: f => f,
};

FormField.Label = ({ className, ...otherProps }) => {
  return (
    <label className={cn('fform-field-label')} {...otherProps} />
  );
};

const withFocus = (InputComponent) => {
  const OutputComponent = React.forwardRef(({ onFocus, onBlur, disabled, ...otherProps }, ref) => {
    const { setFocus, setDisabled } = useContext(Context);
    const _onFocus = useCallback((e) => {
      setFocus(true);
      onFocus(e);
    }, [setFocus]);
    const _onBlur = useCallback((e) => {
      setFocus(false);
      onBlur(e);
    }, [setFocus]);

    useEffect(() => {
      setDisabled(disabled);
    }, [disabled]);
  
    return (
      <InputComponent
        ref={ref}
        onFocus={_onFocus}
        onBlur={_onBlur}
        disabled={disabled}
        {...otherProps}
      />
    );
  });

  return OutputComponent;
};

FormField.Textbox = withFocus(Textbox);
FormField.Password = withFocus(Password);
FormField.Textarea = withFocus(Textarea);

export default FormField;
