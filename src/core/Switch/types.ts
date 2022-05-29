import type React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<{}>, 'size'> {
  sx?: object,
  children?: any,
  color?: 'primary' | 'success' | 'error' | 'warning',
  loading?: boolean,
  size?: 'small' | 'medium' | 'large',
};
