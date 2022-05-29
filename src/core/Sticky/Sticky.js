import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import useUniqueId from '../../hooks/useUniqueId';
import StickyJS from '../../libs/sticky';

const Sticky = React.forwardRef(({
  className,
  stickyClass,
  stickyContainer,
  marginTop,
  marginBottom,
  ...otherProps
}, ref) => {
  const id = useUniqueId();
  const localRef = useRef(null);
  const stickyRef = useRef(null);
  const ro = useRef(new ResizeObserver(() => localRef.current.update()));

  useEffect(() => {
    localRef.current = new StickyJS(`#${id}`, {
      stickyClass,
      stickyContainer,
      marginTop,
      marginBottom,
    });
    if (ref) {
      ref.current = localRef.current;
    }

    return () => localRef.current.destroy();
  }, [
    ref,
    stickyClass,
    stickyContainer,
    marginTop,
    marginBottom,
  ]);

  useEffect(() => {
    ro.current.observe(stickyRef.current.parentNode);
    return () => ro.current.disconnect();
  }, [stickyRef]);

  return (
    <span className={cn('fsticky', className)} id={id} ref={stickyRef} {...otherProps} />
  );
});

export default Sticky;
