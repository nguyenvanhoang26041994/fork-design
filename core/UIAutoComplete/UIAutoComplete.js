import React, { useRef, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Overlay from '../Overlay';
import Loader from '../Loader';

const UIAutoComplete = ({ className, overlay, ...otherProps }) => {
  return (
    <Overlay
      className={cn('fautocomplete-overlay-container', className)}
      role="autocomplete"
      content={overlay}
      {...otherProps}
    />
  );
};
UIAutoComplete.defaultProps = {
  placement: 'bottom-start',
  trigger: 'click',
  hideOnClick: true,
  arrow: false,
  maxWidth: 'none',
  offset: [0, 5]
};
UIAutoComplete.Option = ({ className, onSelect, value, active, hide, ...otherProps }) => {
  const _onClick = useCallback(() => onSelect(value), [onSelect, value]);
  return (
    <button
      className={cn('fautocomplete-option', {
        'fautocomplete-option-active': active,
        'fautocomplete-option-hide': hide,
      }, className)}
      onClick={_onClick}
      {...otherProps}
    />
  );
};

UIAutoComplete.AutoCompleteInput = React.forwardRef(({ className, inputRef, onChange, loading, ...otherProps }, ref) => {
  return (
    <button className={cn('fautocomplete-input', className)} ref={ref}>
      <input
        ref={inputRef}
        onChange={onChange}
        {...otherProps}
      />
      {loading && <Loader.Spinner className="fautocomplete-loading" />}
    </button>
  );
});

UIAutoComplete.Overlay = React.forwardRef(({ className, children, onBottomIntersecting, ...otherProps }, ref) => {
  const _ref = ref || useRef();
  const bottomRef = useRef();
  const localRef = useRef({
    observer: null,
    onBottomIntersecting: null,
  });

  // trick to avoid register unnessessary observer
  localRef.current.onBottomIntersecting = onBottomIntersecting;

  useEffect(() => {
    if (localRef.current.onBottomIntersecting && _ref.current && bottomRef.current) {
      localRef.current.observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          localRef.current.onBottomIntersecting();
        }
      }, {
        root: _ref.current,
        rootMargin: '0px',
        threshold: 0,
      });
      localRef.current.observer.observe(bottomRef.current);

      return () => {
        localRef.current.observer.disconnect();
      };
    }
  }, []);

  return (
    <div
      ref={_ref}
      className={cn('fautocomplete-overlay', className)}
      {...otherProps}
    >
      {children}
      <div ref={bottomRef} />
    </div>
  );
});

export default UIAutoComplete;
