import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Spinner = ({ style, color, size, className, ...otherProps }) => {
  return (
    <div
      style={{
        ...style,
        color,
        '--spinner-size': size
      }}
      className={cn('floader-spinner', className)}
    >
      <div className="floader-spinner-spin" {...otherProps} />
    </div>
  );
};

Spinner.displayName = 'Loader.Spinner';
Spinner.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
Spinner.defaultProps = {
  size: '24px',
};

export default Spinner;

