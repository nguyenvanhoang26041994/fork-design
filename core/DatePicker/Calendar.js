import React, { useContext } from 'react';
import Calendar from '../Calendar';
import Context from './Calendar.Context';

const EnhancerCalendar = (props) => {
  const contextProps = useContext(Context);

  return (
    <Calendar {...contextProps} {...props} />
  );
};

EnhancerCalendar.Context = Context;

export default EnhancerCalendar;
