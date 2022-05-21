import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const useCalcPercent = (percent) => {
  return useMemo(() => {
    if (percent < 0) {
      return 0;
    }

    if (percent > 100) {
      return 100;
    }

    return percent;
  }, [percent]);
};

const LinearProgress = ({
  className,
  children,
  percent,
  style,
  color,
  railColor,
  size,
  animated,
  ...otherProps
}) => {
  const value = useCalcPercent(percent);

  return (
    <div
      className={cn('flinear-progress', { 'flinear-progress-animated' : animated}, className)}
      style={{
        ...style,
        '--linear-progress-size': size ? `${size}px` : undefined,
        '--linear-progress-color': color,
        '--linear-progress-rail-color': railColor,
        '--linear-progress-value': `${value}%`,
      }}
      {...otherProps}
    >
      <div className="flinear-progress-rail">
        <div className="flinear-progress-value">
          {children}
        </div>
      </div>
    </div>
  );
};

LinearProgress.displayName = 'Progress.Linear';
LinearProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  railColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  animated: PropTypes.bool,
};
LinearProgress.defaultProps = {
  percent: 0,
};

export default LinearProgress;
