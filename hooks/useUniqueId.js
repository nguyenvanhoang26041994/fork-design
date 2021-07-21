
import { useRef } from 'react';
import { uniqueId } from '../utils/helpers';

const useUniqueId = (prefix) => {
  const ref = useRef(uniqueId(prefix));

  return ref.current;
};

export default useUniqueId;
