import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ButtonGroup = ({ className, fluid, ...otherProps }) => {
  return (
    <div
      className={cn(
        'fgroup-btn',
        {
          'fgroup-btn-fluid': fluid
        },
        className
      )}
      {...otherProps}
    />
  );
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
};
ButtonGroup.defaultProps = {};

export default ButtonGroup;
