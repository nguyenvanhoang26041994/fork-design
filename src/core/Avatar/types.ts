import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: object,
  children?: any,
  src?: string,
  size?: number,
  color?: string,
  shape?: 'square' | 'circle',
};
