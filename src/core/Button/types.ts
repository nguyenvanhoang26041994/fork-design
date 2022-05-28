import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  sx?: object,
  children?: any,
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning',
  loading?: boolean,
  endIcon?: React.ReactElement,
  startIcon?: React.ReactElement,
  size?: 'small' | 'medium' | 'large',
  variant?: 'contained' | 'outlined' | 'outlined-dashed' | 'text',
  rounded?: boolean,
  htmlType?: 'button' | 'submit' | 'reset',
};
