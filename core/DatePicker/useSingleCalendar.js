import { useCallback } from 'react';
import useCommonCalendar from './useCommonCalendar';

export default (
  defaultDisplayDate,
  defaultStartDate,
  defaultEndDate,
  now,
) => {
  const {
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
  } = useCommonCalendar(defaultDisplayDate, defaultStartDate, defaultEndDate, now);

  const onDateClick = useCallback((_val) => {
    setStartDate(_val);
    setEndDate(_val);
  }, [setStartDate, setEndDate]);

  return {
    displayDate,
    startDate,
    endDate,
    onNextMonth,
    onPrevMonth,
    onDateClick,
    onReset,
    onClear,
    onGotoNow,
    setStartDate,
    setEndDate,
  };
};
