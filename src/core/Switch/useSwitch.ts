import type React from 'react';
import { useState, useCallback } from 'react';

const useSwitch = (defaultValue: boolean | undefined) => {
  const [checked, setChecked] = useState(defaultValue);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  }, [setChecked]);
  const toggle = useCallback(() => setChecked(val => !val), [setChecked]);

  return [{ checked, onChange, toggle, setChecked }];
};

export default useSwitch;
