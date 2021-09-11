import React, { useState, useCallback } from 'react';
import Context from './Context';
import withSingleCalendar from './withSingleCalendar';

const CalendarContextChildren = ({ children }) =>  children;
const EnhanderCalendarContext = withSingleCalendar(CalendarContextChildren);

const Provider = ({ children, defaultDisplayDate, ...otherProps }) => {
  return (
    <Context.Provider {...otherProps}>
      <EnhanderCalendarContext>
        {children}
      </EnhanderCalendarContext>
    </Context.Provider>
  );
};

Provider.defaultProps = {
  defaultDisplayDate: new Date(Date.now()),
};

export default Provider;
