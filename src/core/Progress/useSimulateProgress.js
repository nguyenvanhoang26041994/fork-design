import { useState, useEffect } from 'react';

const useSimulateProgress = ({
  status,
  maxIncreasePercent = 25,
  maxPercentWhenWaiting = 98,
}) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let timer;
    const frame = () => setPercent(val => {
      const nextVal = val + Math.floor(Math.random() * maxIncreasePercent);
      if (nextVal >= maxPercentWhenWaiting) {
        return maxPercentWhenWaiting;
      }
      return nextVal;
    });

    // WHENEVER AJAX STILL NOT COMPLETE ET
    if (status === 'loading') {
      timer = setInterval(frame, 300);
    }
    // WHENEVER AJAX COMPLETE
    if (status === 'completed') {
      clearInterval(timer);
      setPercent(100);
    }

    return () => clearInterval(timer);
  }, [status, setPercent, maxPercentWhenWaiting, maxIncreasePercent]);

  return [percent, setPercent];
};

export default useSimulateProgress;
