import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useRadioGroup from './useRadioGroup';

const Radio = React.forwardRef(({ className, style, size, color, ...otherProps }, ref) => {
  return (
    <span
      className={cn('fradio', className)}
      style={{
        ...style,
        color: color,
        '--radio-size': size ? `${size}px` : undefined,
      }}
    >
      <input
        type="radio"
        className="fradio-input"
        ref={ref}
        {...otherProps}
      />
      <div className="fradio-mark" />
    </span>
  );
});

Radio.useRadioGroup = useRadioGroup;
Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.number,
};
Radio.defaultProps = {};

export default Radio;
