
import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';

import IconProps from '../types/Icon';

const withIconEnhancer = (displayName: string, originalName: string, IconComponent: (props: React.SVGAttributes<{}>) => React.ReactElement) => {
  const OutputComponent = ({ className, sx, style, color, size, stroke, ...otherProps }: IconProps): React.ReactElement => {
    return (
      <IconComponent
        className={cn('ficon', { [`ficon-${originalName}`]: originalName }, className)}
        style={makeStyle(sx, {
          fontSize: size,
          color: color,
          strokeWidth: stroke,
          ...style
        })}
        {...otherProps}
      />
    );
  };

  OutputComponent.displayName = displayName;
  OutputComponent.defaultProps = {};

  return OutputComponent;
};

export default withIconEnhancer;