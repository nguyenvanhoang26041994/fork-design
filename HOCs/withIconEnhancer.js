
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const withIconEnhancer = (displayName, originalName, InputComponent) => {
  const OutputComponent = ({ className, style, color, size, stroke, ...otherProps }) => {
    return (
      <InputComponent
        className={cn('ficon', { [`ficon-${originalName}`]: originalName }, className)}
        style={{
          fontSize: size,
          color: color,
          strokeWidth: stroke,
          ...style
        }}
        {...otherProps}
      />
    );
  };

  OutputComponent.displayName = displayName;
  OutputComponent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.string,
    stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
  OutputComponent.defaultProps = {};

  return OutputComponent;
};

export default withIconEnhancer;