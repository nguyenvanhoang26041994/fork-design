import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const UICalendar = ({ className, ...otherProps }) => (
    <div className={cn('fcalendar', className)} {...otherProps} />
  );

UICalendar.Header = ({ className, ...otherProps }) => (
    <div className={cn('fcalendar-header', className)} {...otherProps} />
  );

UICalendar.Body = ({ className, ...otherProps }) => (
    <div className={cn('fcalendar-body', className)} {...otherProps} />
  );

UICalendar.Footer = ({ className, ...otherProps }) => (
    <div className={cn('fcalendar-footer', className)} {...otherProps} />
  );

export default UICalendar;
