import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';

import Overlay from '../Overlay';
import Textbox from '../Textbox';
import useMeasure from '../../hooks/useMeasure';
import fuzzysort from '../../libs/fuzzysort';

const offset = [0, 5];
const Autocomplete = ({ children, className, options, ...otherProps }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const tippyRef = useRef();
  const { ref, bounds } = useMeasure();
  useEffect(() => {
    tippyRef.current = ref.current._tippy;
  }, []);

  const onChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [setSearchTerm]);

  const doSelectOption = useCallback((option) => {
    ref.current.value = option.text;
    ref.current.focus();
    tippyRef.current.hide();
  }, []);

  const matchedOptions = useMemo(() => {
    return fuzzysort.go(searchTerm, options, { key: 'text' }).map(item => item.obj);
  }, [options, searchTerm]);

  useEffect(() => {
    if (!matchedOptions.length) {
      tippyRef.current.hide();
    } else {
      tippyRef.current.show();
    }
  }, [matchedOptions]);

  return (
    <Overlay
      className="fautocomplete"
      role="autocomplete"
      placement="bottom-start"
      trigger="none"
      hideOnClick
      arrow={false}
      maxWidth="none"
      offset={offset}
      content={(
        <div className="fautocomplete-content" style={{ minWidth: bounds.width }}>
          {matchedOptions.map((option) => (
            <div
              className="fautocomplete-option"
              key={option.uid}
              onClick={() => doSelectOption(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    >
      <Textbox
        ref={ref}
        onChange={onChange}
      />
    </Overlay>
  );
};

Autocomplete.defaultProps = {};

export default Autocomplete;
