import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import useSwitch from './useSwitch';

const Switch = React.forwardRef(({ className, style, size, color, disabled, loading, ...otherProps }, ref) => {
  return (
    <div
      className={cn('fswitch', className)}
      style={{
        ...style,
        color: color,
        '--switch-size': size ? `${size}px` : undefined,
      }}
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
  );
});

Switch.displayName = 'Switch';
Switch.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.number,
};
Switch.defaultProps = {};
Switch.useSwitch = useSwitch;

export default Switch;
