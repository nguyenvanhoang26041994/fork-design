import { useState, useCallback } from 'react'

const useTabs = function(defaultProps) {
  const [currentTab, setCurrentTab] = useState(defaultProps.currentTab);
  const onChange = useCallback(val => setCurrentTab(val), [setCurrentTab]);
  const checkActive = useCallback(tab => currentTab === tab, [currentTab]);

  return [
    {
      currentTab,
      onChange,
      checkActive,
    },
    {
      setCurrentTab,
    },
  ];
};

export default useTabs;
