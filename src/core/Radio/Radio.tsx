import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import mapEnumClass from '../../utils/mapEnumClass';

import type { RadioProps } from './types';

export const mColor = Object.freeze({
  'primary': 'fradio-primary',
  'success': 'fradio-success',
  'error': 'fradio-error',
  'warning': 'fradio-warning',
});

export const mSize = Object.freeze({
  'small': 'fradio-small',
  'medium': 'fradio-medium',
  'large': 'fradio-large',
});

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
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
      'fradio',
      mapEnumClass(mColor, color),
      mapEnumClass(mSize, size),
      className,
    )}
    style={makeStyle(sx, style)}
  >
    <input
      type="radio"
      className="fradio-input"
      ref={ref}
      {...otherProps}
    />
    <div className="fradio-mark" />
  </span>
));

Radio.displayName = 'Radio';
Radio.defaultProps = {};

export default Radio;
