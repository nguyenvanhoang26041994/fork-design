import React from 'react';

export interface PanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onClick'> {
  title?: string | React.ReactNode,
  active?: boolean,
  fresh?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
};
