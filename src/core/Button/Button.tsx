import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Spinner from '../Loader/Spinner';

import type { ButtonProps } from './types';

export const mColor = {
  'primary': 'fbtn-primary',
  'success': 'fbtn-success',
  'error': 'fbtn-error',
  'secondary': 'fbtn-secondary',
} as const;

export const mSize = {
  'small': 'fbtn-small',
  'medium': 'fbtn-medium',
  'large': 'fbtn-large',
} as const;

export const mVariant = {
  'contained': 'fbtn-contained',
  'outlined': 'fbtn-outlined',
  'dashed': 'fbtn-dashed',
  'text': 'fbtn-text',
} as const;

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
  icon,
  size,
  variant,
  rounded,
  upercase,
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
        'fbtn-upercase': upercase,
        'fbtn-icon': !!icon,
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
      {icon}
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
