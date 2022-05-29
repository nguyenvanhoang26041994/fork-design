import type React from 'react';

export interface ChipProps extends Omit<React.InputHTMLAttributes<{}>, 'size'> {
  rounded?: boolean,
  closable?: boolean,
  onClose?: React.MouseEventHandler<HTMLDivElement>,
  size?: string,
  clickable?: boolean,
};
