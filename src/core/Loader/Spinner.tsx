import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string,
  color?: string,
};
const Spinner = ({ style, color, size, className, ...otherProps }: SpinnerProps) => (
    <div
      style={{
        ...style,
        color,
        '--spinner-size': size,
      }}
      className={cn('floader-spinner', className)}
    >
      <div className="floader-spinner-spin" {...otherProps} />
    </div>
  );

Spinner.displayName = 'Loader.Spinner';
Spinner.defaultProps = {
  size: '24px',
};

export default Spinner;

