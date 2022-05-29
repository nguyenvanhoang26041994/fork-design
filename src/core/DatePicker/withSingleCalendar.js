import React, { useState, useCallback } from 'react';
import Calendar from './Calendar';
import useSingleCalendar from './useSingleCalendar';

const Provider = ({ children, defaultDisplayDate, defaultStartDate, defaultEndDate, now }) => {
  const {
    displayDate,
    startDate,
    endDate,
    onNextMonth,
    onPrevMonth,
    onDateClick,
    onReset,
    onClear,
    onGotoNow,
  } = useSingleCalendar(defaultDisplayDate, defaultStartDate, defaultEndDate, now);

  return (
    <Calendar.Context.Provider
      value={{
        now,
        displayDate,
        startDate,
        endDate,
        onNextMonth,
        onPrevMonth,
        onDateClick,
        onReset,
        onClear,
        onGotoNow,
      }}
    >
      {children}
    </Calendar.Context.Provider>
  );
};

Provider.defaultProps = {
  defaultDisplayDate: new Date(Date.now()),
};

export default (WrappedComponent) => {
  const ReturnComponent = (props) => (
      <Provider
        defaultDisplayDate={props.defaultDisplayDate}
        defaultStartDate={props.defaultStartDate}
        defaultEndDate={props.defaultEndDate}
        now={props.now}
      >
        <WrappedComponent {...props} />
      </Provider>
    );

  ReturnComponent.defaultProps = {
    now: new Date(Date.now()),
  };

  return ReturnComponent;
};
