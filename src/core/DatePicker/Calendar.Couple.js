import React, { useState, useCallback } from 'react';
import cn from 'classnames';

import getBeginDateOfTheNextMonth from '../../utils/getBeginDateOfTheNextMonth';
import getBeginDateOfThePrevMonth from '../../utils/getBeginDateOfThePrevMonth';

import Button from '../Button';
import Refresh from '../../icons/Refresh'
import Calendar from '../Calendar';

const noop = f => f;
const detectSameMonth = (aDate, bDate) => {
  if (!aDate || !bDate) {
    return false;
  }

  if (aDate.getMonth() !== bDate.getMonth()) {
    return false;
  }

  if (aDate.getFullYear() !== bDate.getFullYear()) {
    return false;
  }
  return true;
};

const initLeftDefaultDisplayDate = (leftDefaultDisplayDate) => {

};
const initRightDefaultDisplayDate = (leftDefaultDisplayDate, rightDefaultDisplayDate) => {

};

const CoupleCalendar = ({
  now,
  leftDefaultDisplayDate,
  rightDefaultDisplayDate,
  defaultStartDate,
  defaultEndDate,
}) => {
  const [leftDisplayDate, setLeftDisplayDate] = useState(leftDefaultDisplayDate);
  const [rightDisplayDate, setRightDisplayDate] = useState(rightDefaultDisplayDate);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const onLeftNextMonth = useCallback(() => setLeftDisplayDate(prev => {
    const _prev = getBeginDateOfTheNextMonth(prev);
    setRightDisplayDate(rPrev => {
      if (detectSameMonth(rPrev, _prev)) {
        return getBeginDateOfTheNextMonth(_prev);
      }
      return rPrev;
    });
    return _prev;
  }), [setLeftDisplayDate, setRightDisplayDate]);
  const onLeftPrevMonth = useCallback(() => setLeftDisplayDate(prev => getBeginDateOfThePrevMonth(prev)), [setLeftDisplayDate]);
  const onRightNextMonth = useCallback(() => setRightDisplayDate(prev => getBeginDateOfTheNextMonth(prev)), [setRightDisplayDate]);
  const onRightPrevMonth = useCallback(() => setRightDisplayDate(prev => {
    
    const _prev = getBeginDateOfThePrevMonth(prev);
    setLeftDisplayDate(lPrev => {
      if (detectSameMonth(lPrev, _prev)) {
        return getBeginDateOfThePrevMonth(_prev);
      }
      return lPrev;
    });
    return _prev;
  }), [setRightDisplayDate]);

  const onLeftDateItemClick = useCallback((val) => {
    setStartDate(val);
  }, [setStartDate]);
  const onRightDateItemClick = useCallback((val) => {
    if (startDate) {
      setEndDate(val);
    }
  }, [setEndDate, startDate]);

  const onClear = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
  }, [setStartDate, setEndDate]);

  return (
    <div className={cn('fui-couple-calendar')}>
      <div className="fui-couple-calendar-body">
        <Calendar
          hiddenRefresh
          now={now}
          displayDate={leftDisplayDate}
          startDate={startDate}
          endDate={endDate}
          onNextMonth={onLeftNextMonth}
          onPrevMonth={onLeftPrevMonth}
          onDateClick={onLeftDateItemClick}
        />
        <Calendar
          hiddenRefresh
          displayDate={rightDisplayDate}
          startDate={startDate}
          endDate={endDate}
          onNextMonth={onRightNextMonth}
          onPrevMonth={onRightPrevMonth}
          onDateClick={onRightDateItemClick}
        />
      </div>
      <div className="fui-couple-calendar-footer">
        <Button
          glassed
          circle
          icon={<Refresh />}
          onClick={onClear}
        />
      </div>
    </div>
  );
};

const _now = new Date(Date.now());
const _nextMonthOfNow = getBeginDateOfTheNextMonth(_now);

CoupleCalendar.defaultProps = {
  leftDefaultDisplayDate: _now,
  rightDefaultDisplayDate: _nextMonthOfNow,
};

export default CoupleCalendar;
