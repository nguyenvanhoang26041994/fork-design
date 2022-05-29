import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Body = React.forwardRef(({ className, children, ...otherProps }, ref) => (
    <div className={cn('fdialog-body', className)} {...otherProps} ref={ref}>
      {children}
    </div>
  ));

Body.displayName = 'Dialog.Body';
Body.propTypes = {
  className: PropTypes.string,
};
Body.defaultProps = {};

export default Body;
