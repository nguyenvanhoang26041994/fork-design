import { useRef } from 'react';
import usePureMeansure from './usePureMeansure';

export default function useMeasure(deps = []) {
  const ref = useRef();
  const bounds = usePureMeansure(ref, deps);

  return {
    ref,
    bounds,
  };
}
