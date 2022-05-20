import { useState, useCallback } from 'react';

const useSwitch = (defaultChecked) => {
  const [checked, setChecked] = useState(defaultChecked);
  const onChange = useCallback(e => setChecked(e.target.checked), [setChecked]);
  const toggle = useCallback(() => setChecked(val => !val), [setChecked]);

  return [{ checked, onChange, toggle, setChecked }];
};

export default useSwitch;
