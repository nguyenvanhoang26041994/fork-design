import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Textbox = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <input
      className={cn('ftextbox', className)}
      type="text"
      ref={ref}
      {...otherProps}
    />
  );
});

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
};
Textbox.defaultProps = {};

export default Textbox;
