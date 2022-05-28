import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Spinner from '../Loader/Spinner';

export const mColor = Object.freeze({
  'default': 'fbtn-default',
  'primary': 'fbtn-primary',
  'secondary': 'fbtn-secondary',
  'success': 'fbtn-success',
  'error': 'fbtn-error',
  'warning': 'fbtn-warning',
});

export const mSize = Object.freeze({
  'small': 'fbtn-small',
  'medium': 'fbtn-medium',
  'large': 'fbtn-large',
});

export const mVariant = Object.freeze({
  'contained': 'fbtn-contained',
  'outlined': 'fbtn-outlined',
  'outlined-dashed': 'fbtn-outlined-dashed',
  'text': 'fbtn-text',
});

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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  sx,
  style,
  className,
  children,
  color,
  disabled,
  loading,
  endIcon,
  startIcon,
  size,
  variant,
  rounded,
  htmlType,
  ...otherProps
}, ref) => (
  <button
    ref={ref}
    type={htmlType}
    className={cn(
      'fbtn',
      {
        'fbtn-loading': loading,
        'fbtn-rounded': rounded,
      },
      mapEnumClass(mColor, color),
      mapEnumClass(mSize, size),
      mapEnumClass(mVariant, variant),
      className,
    )}
    style={makeStyle(sx, style)}
    disabled={loading || disabled}
    {...otherProps}
  >
    {loading && <Spinner className="fbtn-spinner" />}
    <span className="fbtn-child">
      {startIcon && (
        <span className='fbtn-start-icon'>{startIcon}</span>
      )}
      {children}
      {endIcon && (
        <span className='fbtn-end-icon'>{endIcon}</span>
      )}
    </span>
  </button>
));

Button.displayName = 'Button';
Button.defaultProps = {
  color: 'primary',
  disabled: false,
  loading: false,
  size: 'medium',
  variant: 'contained',
  rounded: false,
  htmlType: 'button',
};

export default Button;
