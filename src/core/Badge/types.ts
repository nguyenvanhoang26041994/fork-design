import type React from 'react';

import type { placementType } from '../types/placementTypes';

export interface PureBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  badge: React.ReactNode,
  overlap?: boolean,
  placement?: placementType
};

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number,
  overflow: number,
  color?: string,
  renderOverflow: (overflow: number) => any,
};

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string,
  label: any,
};

export interface DotProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string,
};

export interface BadgeCounterProps extends CounterProps {};
export interface BadgeDotProps extends DotProps {};
export interface BadgeLabelProps extends LabelProps {};

