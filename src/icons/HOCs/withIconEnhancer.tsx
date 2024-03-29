
import React from 'react';
import cn from 'classnames';

import makeStyle from '../../utils/makeStyle';
import type IconProps from '../types/Icon';

const withIconEnhancer = (displayName: string, originalName: string, IconComponent: (props: React.SVGAttributes<{}>) => any) => {
  const OutputComponent = ({ className, sx, style, color, size, stroke, ...otherProps }: IconProps): any => (
      <IconComponent
        className={cn('ficon', { [`ficon-${originalName}`]: originalName }, className)}
        style={makeStyle(sx, {
          fontSize: size,
          color,
          strokeWidth: stroke,
          ...style,
        })}
        {...otherProps}
      />
    );

  OutputComponent.displayName = displayName;
  OutputComponent.defaultProps = {};

  return OutputComponent;
};

export default withIconEnhancer;
