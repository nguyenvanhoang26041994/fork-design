import React from 'react';
import cn from 'classnames';


import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Loader from '../Loader';

import type { SwitchProps } from './types';

export const mColor = {
  'primary': 'fswitch-primary',
  'success': 'fswitch-success',
  'error': 'fswitch-error',
  'warning': 'fswitch-warning',
} as const;

export const mSize = {
  'small': 'fswitch-small',
  'medium': 'fswitch-medium',
  'large': 'fswitch-large',
} as const;

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({
  sx,
  style,
  className,
  children,
  color,
  disabled,
  loading,
  size,
  ...otherProps
}, ref) => (
  <div
    className={cn(
      'fswitch',
      mapEnumClass(mColor, color),
      mapEnumClass(mSize, size),
      className,
    )}
    style={makeStyle(sx, style)}
  >
    <input
      type="checkbox"
      className="fswitch-input"
      ref={ref}
      disabled={disabled || loading}
      {...otherProps}
    />
    <div className="fswitch-mark">
      <span className="fswitch-lever">
        {loading && (
          <Loader.Spinner
            className="fswitch-spinner"
            size="calc(var(--switch-size) / 1.5)"
          />
        )}
      </span>
    </div>
  </div>
));

Switch.displayName = 'Switch';
Switch.defaultProps = {};

export default Switch;
