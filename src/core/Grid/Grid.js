import React, { useMemo } from 'react';
import cn from 'classnames';
import useLocalRef from '../../hooks/useLocalRef';
import usePureMeansure from '../../hooks/usePureMeansure';

const Grid = React.forwardRef(({ cols, gap, className, style, ...otherProps }, ref) => {
  const localRef = useLocalRef(ref);
  const bounds = usePureMeansure(localRef);
  const cellSize = useMemo(() => bounds.width / cols - (cols - 2) * gap / cols, [bounds.width, cols, gap]);

  const gridTemplateColumns = useMemo(() => {
    let str = 'var(--grid-cell-size)';
    for(let i = 1; i < cols; i++) {
      str += ` var(--grid-cell-size)`;
    }

    return `${str}`;
  }, [cols]);

  return (
    <div
      className={cn('fgrid', className)}
      style={{
        '--grid-cell-size': `${cellSize}px`,
        '--grid-gap': `${gap}px`,
        gridTemplateColumns,
        ...style,
      }}
      ref={localRef}
      {...otherProps}
    />
  );
});
Grid.defaultProps = {
  gap: 0,
  cols: 1,
};
export default Grid;
