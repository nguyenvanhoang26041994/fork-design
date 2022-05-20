import React from 'react';
import cn from 'classnames';

import Grid from '../Grid';

const GridImage = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <Grid
      className={cn('fgrid-img', className)}
      ref={ref}
      {...otherProps}
    />
  );
});

export default GridImage;
