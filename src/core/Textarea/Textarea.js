import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Textarea = React.forwardRef(({ className, rounded, ...otherProps }, ref) => (
    <textarea
      {...otherProps}
      ref={ref}
      className={cn('ftextarea', { 'ftextarea-rounded': rounded }, className)}
    />
  ));

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
};
Textarea.defaultProps = {};

export default Textarea;
