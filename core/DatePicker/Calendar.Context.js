import React from 'react';

const now = new Date(Date.now());

export default React.createContext({
  now,
  displayDate: now,
  startDate: null,
  endDate: null,
  onNextMonth: f => f,
  onPrevMonth: f => f,
  onDateClick: f => f,
  onReset: f => f,
  onClear: f => f,
  onGotoNow: f => f,
});
