import React from 'react';
import cn from 'classnames';

const Image = ({ className, ...otherProps }) => (
    <img
      className={cn('fimage', className)}
      loading="lazy"
      {...otherProps}
    />
  );

export default Image;
