import { useState, useCallback } from 'react';
import getBeginDateOfTheNextMonth from '../../utils/getBeginDateOfTheNextMonth';
import getBeginDateOfThePrevMonth from '../../utils/getBeginDateOfThePrevMonth';

export default (
  defaultDisplayDate,
  defaultStartDate,
  defaultEndDate,
  now,
) => {
  const [displayDate, setDisplayDate] = useState(defaultDisplayDate);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const onNextMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfTheNextMonth(prev)), [setDisplayDate]);
  const onPrevMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfThePrevMonth(prev)), [setDisplayDate]);
  const onReset = useCallback(() => {
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
  }, [setStartDate, setEndDate]);
  const onClear = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
  }, [setStartDate, setEndDate]);

  const onGotoNow = useCallback(() => setDisplayDate(now), [setStartDate, setEndDate]);

  return {
    displayDate,
    startDate,
    endDate,
    onNextMonth,
    onPrevMonth,
    setStartDate,
    setEndDate,
    onReset,
    onClear,
    onGotoNow,
  };
};
