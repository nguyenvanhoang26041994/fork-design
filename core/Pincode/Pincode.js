import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { trim } from 'lodash';
import cn from 'classnames';

const Pincode = React.memo(React.forwardRef(({
  className,
  length,
  onPincodeChanged,
  onPincodeCompleted,
  validate,
  format,
  placeholder
}, hiddenRef) => {
  const [values, setValues] = useState(() => {
    let _values = [];
    for (let i = 0; i < length; i++) {
      _values.push('')
    }
    return _values;
  });
  const _hiddenRef = hiddenRef || useRef();
  const self = useRef({}).current;
  const ref = useRef();
  const valuesStr = useMemo(() => values.map(val => val || ' ').join(''), [values]);
  const isValid = useMemo(() => /^\S+$/.test(valuesStr), [valuesStr]);

  const paste = useCallback((str) => {
    const pastedData = str
      .trim()
      .slice(0, length)
      .split('')
      .map((item) => format(item));
    if (pastedData && pastedData.length === length) {
      const allIsValid = pastedData
        .map((item) => validate.test(item))
        .filter(valid => valid)
        .length === pastedData.length;
      if (allIsValid) {
        setValues(pastedData);
      }
    }
  }, [length, length, validate, setValues]);
  useEffect(() => {
    ref.current.inputs = ref.current.querySelectorAll('.fpincode-input');
  }, []);

  useEffect(() => {
    _hiddenRef.current.paste = paste;
  }, [paste]);

  self.isValid = isValid;
  self.valuesStr = valuesStr;
  self.onPincodeChanged = onPincodeChanged;
  self.onPincodeCompleted = onPincodeCompleted;
  useEffect(() => {
    if (self.isValid) {
      self.onPincodeChanged(valuesStr);
    }
  }, [valuesStr]);
  useEffect(() => {
    if (isValid) {
      self.onPincodeCompleted(self.valuesStr);
    }
  }, [isValid]);
  const updatePincodeAt = useCallback((index, value) => {
    setValues((prevValues) => {
      return prevValues.map((val, valIndex) => {
        if (valIndex === index) {
          return value || '';
        }
        return val;
      });
    });
  }, [setValues]);
  const focusPrevInput = useCallback((currentIndex) => {
    const prevInput = ref.current.inputs[currentIndex - 1];
    if (prevInput) {
      prevInput.focus();
    }
  }, []);
  const focusNextInput = useCallback((currentIndex) => {
    const nextInput = ref.current.inputs[currentIndex + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }, []);

  const onChange = useCallback((e) => {
    const currentIndex = +e.target.dataset.index;
    let val = format(trim(e.target.value[e.target.value.length - 1]));
    if (!val) {
      e.preventDefault();
      return;
    }

    if (val && validate.test(val)) {
      updatePincodeAt(currentIndex, val);
      focusNextInput(currentIndex);
      return;
    }
  }, [validate, format, focusNextInput, focusPrevInput]);
  const onClick = useCallback((e) => {
    e.target.select();
  }, []);
  const onPaste = useCallback((e) => {
    e.preventDefault();
    const currentIndex = +e.target.dataset.index;
    if (currentIndex === 0) {
      paste(e.clipboardData.getData('text/plain'));
    }
  }, [paste]);
  const onKeyDown = useCallback((e) => {
    const currentIndex = +e.target.dataset.index;
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      updatePincodeAt(currentIndex, '');
      return focusPrevInput(currentIndex);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      return focusPrevInput(currentIndex);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      return focusNextInput(currentIndex);
    }
    if (e.key === values[currentIndex]) {
      e.preventDefault();
      return focusNextInput(currentIndex);
    }
  }, [focusPrevInput, focusNextInput, values]);
  return (
    <div className={cn('fpincode', { 'fpincode-valid': isValid }, className)} ref={ref}>
      <input type="hidden" value={valuesStr} ref={_hiddenRef} />
      {length && (() => {
        const items = [];
        for (let i = 0; i < length; i++) {
          items.push((
            <input
              key={i}
              className="fpincode-input"
              value={values[i]}
              data-index={i}
              onChange={onChange}
              onClick={onClick}
              onPaste={onPaste}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
            />
          ))
        }
        return items;
      })()}
    </div>
  );
}));

Pincode.aZ09 = /^[a-zA-Z0-9]$/;
Pincode.alpha = /^[a-zA-Z]$/;
Pincode.number = /^[0-9]$/;

Pincode.defaultProps = {
  validate: Pincode.aZ09,
  placeholder: '*',
  onPincodeChanged: f => f,
  onPincodeCompleted: f => f,
  format: val => val,
};

export default Pincode;
