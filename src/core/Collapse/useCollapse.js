import { useState, useCallback, useMemo } from 'react';

const useCollapse = function(defaultProps = { accordion: false, activePanels: [] }) {
  const [activePanels, setActivePanels] = useState(defaultProps.activePanels);

  const objActivePanels = useMemo(() => {
    return activePanels.reduce((rs, item) => {
      rs[item] = true;
      return rs;
    }, {});
  }, [activePanels]);

  const onChange = useCallback((val) => {
    if (defaultProps.accordion) {
      return setActivePanels(prev => {
        const _prev = new Set(prev);
        if (_prev.has(val)) {
          return [];
        }

        return [val];
      });
    }
    return setActivePanels(prev => {
      const _prev = new Set(prev);
      if (_prev.has(val)) {
        _prev.delete(val);
      } else {
        _prev.add(val);
      }
      return [..._prev];
    });
  }, [defaultProps.accordion, setActivePanels]);

  const isActive = useCallback(val => objActivePanels[val], [objActivePanels]);

  return {
    activePanels,
    onChange,
    isActive,
    objActivePanels,
    setActivePanels,
  };
};

export default useCollapse;
