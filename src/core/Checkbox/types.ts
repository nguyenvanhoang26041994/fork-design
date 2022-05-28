import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<{}>, 'size'> {
  sx?: object,
  color?: 'primary' | 'success' | 'error' | 'warning',
  size?: 'small' | 'medium' | 'large',
}
