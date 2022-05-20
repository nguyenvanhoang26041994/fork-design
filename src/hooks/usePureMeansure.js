import { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function usePureMeansure(ref, deps = []) {
  const [bounds, set] = useState({ width: 0, height: 0 });
  const isObserved = useRef();
  const ro = useRef(new ResizeObserver(([entry]) => set({
    width: entry.target.offsetWidth,
    height: entry.target.offsetHeight,
  })));

  useEffect(() => {
    if (ref.current && !isObserved.current) {
      ro.current.observe(ref.current);
      isObserved.current = true;
    }
    return () => {
      if (ref.current && isObserved.current) {
        ro.current.disconnect();
      }
    };
  }, deps);

  return bounds;
}
