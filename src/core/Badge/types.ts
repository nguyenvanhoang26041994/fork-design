import React from 'react';

import { placementType } from '../types/placementTypes';

export interface PureBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  badge: React.ReactNode,
  overlap?: boolean,
  placement?: placementType
};

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number,
  overflow: number,
  color?: string,
  renderOverflow: (overflow: number) => React.ReactElement | string,
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

