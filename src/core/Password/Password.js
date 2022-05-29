import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Password = React.forwardRef(({ className, ...otherProps }, ref) => (
    <input
      className={cn('fpassword', className)}
      ref={ref}
      type="password"
      {...otherProps}
    />
  ));

Password.displayName = 'Password';
Password.propTypes = {
  className: PropTypes.string,
};
Password.defaultProps = {};

export default Password;
