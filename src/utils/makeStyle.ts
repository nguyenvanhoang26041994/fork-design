import type React from 'react';

export default (sx?: object, style?: React.CSSProperties) => ({
  ...sx,
  ...style,
});
