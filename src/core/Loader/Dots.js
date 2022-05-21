import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mAnimations = Object.freeze({
  wave: 'floader-dots-wave',
  buble: 'floader-dots-buble',
});

const lAnimations = Object.keys(mAnimations);

const Dots = ({ style, color, size, animation, className, ...otherProps }) => {
  return (
    <div
      style={{
        ...style,
        color,
        '--dot-size': size,
      }}
      className={cn('floader-dots', mAnimations[animation] || 'floader-dots-buble', className)}
      {...otherProps}
    >
      <div className="floader-dot floader-dot-1" />
      <div className="floader-dot floader-dot-2" />
      <div className="floader-dot floader-dot-3" />
    </div>
  );
};

Dots.displayName = 'Loader.Dots';
Dots.propTypes = {
  style: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.oneOf(lAnimations)
};
Dots.defaultProps = {
  animation: 'buble',
  size: '13px',
};

export default Dots;
