import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Spinner from '../Loader/Spinner';

export const mColor = Object.freeze({
  'inherit': 'fbtn-inherit',
  'primary': 'fbtn-primary',
  'secondary': 'fbtn-secondary',
  'success': 'fbtn-success',
  'error': 'fbtn-error',
  'info': 'fbtn-info',
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
  'text': 'fbtn-text',
});

export const mShape = Object.freeze({
  'default': 'fbtn-default',
  'circle': 'fbtn-circle',
  'round': 'fbtn-round',
});

export interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  sx?: object,
  className?: string,
  children?: React.ReactElement | string,
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  disabled?: boolean,
  loading?: boolean,
  endIcon?: React.ReactElement,
  startIcon?: React.ReactElement,
  size?: 'small' | 'medium' | 'large',
  variant?: 'contained' | 'outlined' | 'outlined-dashed' | 'text',
  shape?: 'default' | 'round',
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
  shape,
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
      },
      mapEnumClass(mColor, color),
      mapEnumClass(mSize, size),
      mapEnumClass(mVariant, variant),
      mapEnumClass(mShape, shape),
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
  sx: {},
  color: 'primary',
  disabled: false,
  loading: false,
  size: 'medium',
  variant: 'text',
  shape: 'default',
  htmlType: 'button',
};

export default Button;
