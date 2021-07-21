import { useState, useCallback } from 'react';

const useRadioGroup = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(e => setValue(e.target.value), [setValue]);

  return [{ value, onChange, setValue }];
};

export default useRadioGroup;
