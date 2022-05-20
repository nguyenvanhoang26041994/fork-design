import React, { useCallback, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';
import Searchbox from '../Searchbox';
import ChevronDown from '../icons/ChevronDown';
import Loader from '../Loader';

const UISelect = ({ className, overlay, ...otherProps }) => {
  return (
    <Overlay
      className={cn('fselect-overlay-container', className)}
      role="select"
      content={overlay}
      {...otherProps}
    />
  );
};

UISelect.Searchbox = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <Searchbox
      ref={ref}
      className={cn('fselect-searchbox', className)}
      {...otherProps}
    />
  );
});
UISelect.Option = ({ className, onSelect, value, active, hide, ...otherProps }) => {
  const _onClick = useCallback(() => onSelect(value), [onSelect, value]);
  return (
    <button
      className={cn('fselect-option', {
        'fselect-option-active': active,
        'fselect-option-hide': hide,
      }, className)}
      onClick={_onClick}
      {...otherProps}
    />
  );
};
UISelect.Overlay = ({ className, ...otherProps }) => {
  return (
    <div
      className={cn('fselect-overlay', className)}
      {...otherProps}
    />
  );
};
UISelect.OverlayHeader = ({ className, ...otherProps }) => {
  return (
    <div
      className={cn('fselect-overlay-header', className)}
      {...otherProps}
    />
  );
};
UISelect.OverlayBody = React.forwardRef(({ className, children, onBottomIntersecting, ...otherProps }, ref) => {
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
      className={cn('fselect-overlay-body', className)}
      {...otherProps}
    >
      {children}
      <div ref={bottomRef} />
    </div>
  );
});
UISelect.OverlayFooter = ({ className, ...otherProps }) => {
  return (
    <div
      className={cn('fselect-overlay-footer', className)}
      {...otherProps}
    />
  );
};
UISelect.Single = React.forwardRef(({ children, className, active, disabled, loading, ...otherProps }, ref) => {
  return (
    <button
      ref={ref}
      className={cn('fselect-single', { '--active': active }, className)}
      disabled={disabled || loading}
      {...otherProps}
    >
      {children}
      {loading
        ? <Loader.Spinner className="fselect-single-loading" />
        : <ChevronDown className="fselect-single-icon" />}
    </button>
  );
});
UISelect.Multiple = React.forwardRef(({ children, className, active, disabled, loading, ...otherProps }, ref) => {
  return (
    <button
      ref={ref}
      className={cn('fselect-multiple', { '--active': active }, className)}
      disabled={disabled || loading}
      {...otherProps}
    >
      {children}
      {loading && <Loader.Spinner className="fselect-multiple-loading" />}
    </button>
  );
});

UISelect.defaultProps = {
  placement: 'bottom-start',
  trigger: 'click',
  hideOnClick: true,
  arrow: false,
  maxWidth: 'none',
  offset: [0, 5]
};

export default UISelect;
