import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Backdrop = React.forwardRef(({ className, ...otherProps }, ref) => (
    <div
      ref={ref}
      className={cn('fdialog-backdrop', className)}
      {...otherProps}
    />
  ));

Backdrop.displayName = 'Dialog.Backdrop';
Backdrop.propTypes = {
  className: PropTypes.string,
};
Backdrop.defaultProps = {};

export default Backdrop;
