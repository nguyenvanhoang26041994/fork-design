import React from 'react';
import cn from 'classnames';

const Textbox = React.forwardRef<HTMLInputElement, React.HTMLAttributes<HTMLInputElement>>(({ className, ...otherProps }, ref) => (
  <input
    className={cn('ftextbox', className)}
    type="text"
    ref={ref}
    {...otherProps}
  />
));

Textbox.displayName = 'Textbox';
Textbox.defaultProps = {};

export default Textbox;
