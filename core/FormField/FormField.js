import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const FormField = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fform-field', className)} {...otherProps} />
  );
};

FormField.Label = ({ className, ...otherProps }) => {
  return (
    <label className={cn('fform-field-label')} {...otherProps} />
  );
};

export default FormField;
