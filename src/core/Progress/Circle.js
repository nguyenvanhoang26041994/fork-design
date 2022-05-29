import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const useCalcPercent = (percent) => useMemo(() => {
    if (percent < 0) {
      return 0;
    }

    if (percent > 100) {
      return 100;
    }

    return percent;
  }, [percent]);

const CircleProgress = ({
  className,
  percent,
  style,
  color,
  railColor,
  backgroundColor,
  size,
  strokeWidth,
  linearGradient,
  children,
  ...otherProps
}) => {
  const value = useCalcPercent(percent);

  return (
    <div
      className={cn('fcircle-progress', className)}
      style={{
        ...style,
        '--circle-progress-size': size ? `${size}px` : undefined,
        '--circle-progress-stroke-width': strokeWidth ? `${strokeWidth}px` : undefined,
        '--circle-progress-color': color,
        '--circle-progress-bg-color': backgroundColor,
        '--circle-progress-rail-color': railColor,
        '--circle-progress-value': value,
      }}
      {...otherProps}
    >
      <svg className="fcircle-progress-svg">
        {linearGradient}
        <circle className="fcircle-progress-rail" />
        <circle className="fcircle-progress-value" />
      </svg>
      <div className="fcircle-progress-children">
        {children}
      </div>
    </div>
  );
};

CircleProgress.displayName = 'Progress.Circle';
CircleProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  railColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  strokeWidth: PropTypes.number,
  linearGradient: PropTypes.any,
};
CircleProgress.defaultProps = {
  percent: 0,
};

export default CircleProgress;
