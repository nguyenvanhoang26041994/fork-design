import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: object,
  children?: any,
  src?: string,
  size?: number,
  w?: string,
  h?: string,
  shape?: 'circle' | 'rect' | 'p',
};
