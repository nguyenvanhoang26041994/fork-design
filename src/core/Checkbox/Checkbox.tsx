import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';

import type { CheckboxProps } from './types';

export const mColor = Object.freeze({
  'primary': 'fcbox-primary',
  'success': 'fcbox-success',
  'error': 'fcbox-error',
  'warning': 'fcbox-warning',
});

export const mSize = Object.freeze({
  'small': 'fcbox-small',
  'medium': 'fcbox-medium',
  'large': 'fcbox-large',
});

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  sx,
  style,
  className,
  children,
  color,
  size,
  ...otherProps
}, ref): any => (
  <span
    className={cn(
      'fcbox',
      mapEnumClass(mColor, color),
      mapEnumClass(mSize, size),
      className,
    )}
    style={makeStyle(sx, style)}
  >
    <input
      type="checkbox"
      className="fcbox-input"
      ref={ref}
      {...otherProps}
    />
    <div className="fcbox-mark">
      <svg className="fcbox-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </div>
  </span>
));

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {};

export default Checkbox;
