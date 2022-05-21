import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';

const mColors = Object.freeze({
  default: 'fbtn-default',
  primary: 'fbtn-primary',
  transparent: 'fbtn-transparent',
  danger: 'fbtn-danger',
});

const mBorders = Object.freeze({
  solid: 'fbtn-solid',
  dashed: 'fbtn-dashed',
});

const lColors = Object.keys(mColors);
const lBorders = Object.keys(mBorders);

const Button = React.forwardRef(({
  className,
  icon,
  size,
  style,
  children,
  loading,
  disabled,
  rounded,
  color,
  border,
  ...otherProps
}, ref) => {

  const child = useMemo(() => {
    if (icon) {
      return icon;
    }

    return React.Children.map(children, item => {
      if (isString(item) || isNumber(item)) {
        return <span key={item.key}>{item}</span>;
      }

      return item;
    });
  }, [icon, children]);

  return (
    <button
      ref={ref}
      className={cn(
        'fbtn',
        {
          'fbtn-icon': icon,
          'fbtn-loading': loading,
          'fbtn-rounded': rounded,
        },
        mColors[color],
        mBorders[border],
        className,
      )}
      style={{
        fontSize: size,
        ...style,
      }}
      disabled={loading || disabled}
      {...otherProps}
    >
      {loading && <Loader.Spinner className="fbtn-spinner" />}
      <span className="fbtn-child">
        {child}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(lColors),
  rounded: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.any,
  style: PropTypes.object,
  children: PropTypes.any,
  loading: PropTypes.bool,
  border: PropTypes.oneOf(lBorders),
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  color: 'default',
};

export default Button;
