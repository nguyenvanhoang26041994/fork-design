import React from 'react';
import cn from 'classnames';


import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';
import Loader from '../Loader';

import { SwitchProps } from './types';

export const mColor = Object.freeze({
  'primary': 'fswitch-primary',
  'success': 'fswitch-success',
  'error': 'fswitch-error',
  'warning': 'fswitch-warning',
});

export const mSize = Object.freeze({
  'small': 'fswitch-small',
  'medium': 'fswitch-medium',
  'large': 'fswitch-large',
});

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
}, ref): any => (
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
