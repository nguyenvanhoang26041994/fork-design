import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Calendar from './Calendar';
import Provider from './Provider';
import SingleCalendar from './Calendar.Single';
import RangeCalendar from './Calendar.Range';
import CoupleCalendar from './Calendar.Couple';

const DatePicker = ({}) => (
    <Provider>
      <Calendar />
    </Provider>
  );

DatePicker.Calendar = Calendar;
DatePicker.SingleCalendar = SingleCalendar;
DatePicker.RangeCalendar = RangeCalendar;
DatePicker.CoupleCalendar = CoupleCalendar;

export default DatePicker;
