import type React from 'react';
import { useState, useCallback } from 'react';

const useRadioGroup = (defaultValue: string | number | string[] | undefined) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, [setValue]);

  return [{ value, onChange, setValue }];
};

export default useRadioGroup;
