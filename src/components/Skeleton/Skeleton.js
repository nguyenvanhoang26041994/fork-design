import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mShape = Object.freeze({
  circle: 'fskele-circle',
  rect: 'fskele-rect',
  p: 'fskele-p'
});

const lShape = Object.keys(mShape);

const Skeleton = ({
  className,
  w,
  h,
  style,
  size,
  shape,
  ...otherProps
}) => {
  return (
    <div
      style={{
        width: w,
        height: h,
        fontSize: size,
        ...style
      }}
      className={
        cn(
          'fskele',
          mShape[shape],
          className,
      )}
      {...otherProps}
    />
  );
};

Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.oneOf(lShape),
  w: PropTypes.string,
  h: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};
Skeleton.defaultProps = {};

export default Skeleton;
