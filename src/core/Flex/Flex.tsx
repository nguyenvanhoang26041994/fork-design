import React from 'react';
import cn from 'classnames';

import mapEnumClass from '../../utils/mapEnumClass';

type TDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
type TJustify = 'start' | 'center' | 'end' | 'between' | 'around';
type TItems = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
type TContent = 'start' | 'center' | 'end' | 'between' | 'around';
type TSelf = 'auto' | 'start' | 'center' | 'end' | 'stretch';
type TWrap = 'wrap' | 'no-wrap' | 'reverse';
type TGrow = 'grow' | 'no-grow';
type TShrink = 'shrink' | 'no-shrink';
type TFlex = 'initial' | '1' | 'auto' | 'none';
type TW = '1/2' | '6/12' | '1/3' | '4/12' | '2/3' | '8/12' | '1/4' | '3/12' | '3/4' | '9/12' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/12' | '5/6' | '10/12' | '1/12' | '5/12' | '7/12' | '11/12' | '12/12' | 'full';
type TQuery = 'sm' | 'md' | 'lg' | 'xl';

interface FlexBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: TDirection,
  justify?: TJustify,
  items?: TItems,
  content?: TContent,
  self?: TSelf,
  wrap?: TWrap,
  grow?: TGrow,
  shrink?: TShrink,
  flex?: TFlex,
  w?: TW,
};

export interface FlexProps extends FlexBaseProps {
  children?: any,
  sm?: FlexBaseProps,
  md?: FlexBaseProps,
  lg?: FlexBaseProps,
  xl?: FlexBaseProps
};

export const mJustify = Object.freeze({
  'start': 'justify-start',
  'center': 'justify-center',
  'end': 'justify-end',
  'between': 'justify-between',
  'around': 'justify-around',
});

export const mItems = Object.freeze({
  'stretch': 'items-stretch',
  'start': 'items-start',
  'center': 'items-center',
  'end': 'items-end',
  'baseline': 'items-baseline'
});

export const mWrap = Object.freeze({
  'wrap': 'flex-wrap',
  'no-wrap': 'flex-no-wrap',
  'reverse': 'flex-wrap-reverse'
});

export const mGrow = Object.freeze({
  'grow': 'flex-grow',
  'no-grow': 'flex-no-grow',
});

export const mShrink = Object.freeze({
  'shrink': 'flex-shrink',
  'no-shrink': 'flex-no-shrink',
});

export const mFlex = Object.freeze({
  'initial': 'flex-initial',
  '1': 'flex-1',
  'auto': 'flex-auto',
  'none': 'flex-none',
});

export const mContent = Object.freeze({
  'start': 'content-start',
  'center': 'content-center',
  'end': 'content-end',
  'between': 'content-between',
  'around': 'content-around',
});

export const mSelf = Object.freeze({
  'auto': 'self-auto',
  'start': 'self-start',
  'center': 'self-center',
  'end': 'self-end',
  'stretch': 'self-stretch',
});

export const mWidth = Object.freeze({
  '1/2': 'w-1/2',
  '6/12': 'w-6/12',
  '1/3': 'w-1/3',
  '4/12': 'w-4/12',
  '2/3': 'w-2/3',
  '8/12': 'w-8/12',
  '1/4': 'w-1/4',
  '3/12': 'w-3/12',
  '3/4': 'w-3/4',
  '9/12': 'w-9/12',
  '1/5': 'w-1/5',
  '2/5': 'w-2/5',
  '3/5': 'w-3/5',
  '4/5': 'w-4/5',
  '1/6': 'w-1/6',
  '2/12': 'w-2/12',
  '5/6': 'w-5/6',
  '10/12': 'w-10/12',
  '1/12': 'w-1/12',
  '5/12': 'w-5/12',
  '7/12': 'w-7/12',
  '11/12': 'w-11/12',
  '12/12': 'w-12/12',
  'full': 'w-full',
});

const mDirection = Object.freeze({
  'row': 'flex-row',
  'col': 'flex-col',
  'col-reverse': 'flex-col-reverse',
  'row-reverse': 'flex-row-reverse',
});

export const mapEnumResponsiveClass = (object: any, propName: any, query: TQuery) => {
  if (typeof propName === 'string') {
    return `${query}:${object[propName]}`;
  }
  return '';
};
export const getResponsive = (
  {
    direction,
    justify,
    items,
    content,
    self,
    wrap,
    grow,
    shrink,
    flex,
    w,
  }: FlexBaseProps,
  query: TQuery,
): string => cn(
    mapEnumResponsiveClass(mDirection, direction, query),
    mapEnumResponsiveClass(mJustify, justify, query),
    mapEnumResponsiveClass(mItems, items, query),
    mapEnumResponsiveClass(mWrap, wrap, query),
    mapEnumResponsiveClass(mGrow, grow, query),
    mapEnumResponsiveClass(mFlex, flex, query),
    mapEnumResponsiveClass(mShrink, shrink, query),
    mapEnumResponsiveClass(mContent, content, query),
    mapEnumResponsiveClass(mSelf, self, query),
    mapEnumResponsiveClass(mWidth, w, query),
  );

export const getResponsiveAll = ({ sm = {}, md = {}, lg = {}, xl = {} }: {
  sm?: FlexBaseProps,
  md?: FlexBaseProps,
  lg?: FlexBaseProps,
  xl?: FlexBaseProps,
}): string =>
  cn(
    getResponsive(sm, 'sm'),
    getResponsive(md, 'md'),
    getResponsive(lg, 'lg'),
    getResponsive(xl, 'xl'),
  );

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({
  className,
  children,
  direction,
  justify,
  items,
  content,
  self,
  wrap,
  grow,
  shrink,
  flex,
  w,
  sm,
  md,
  lg,
  xl,
  ...otherProps
}, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex',
      mapEnumClass(mDirection, direction),
      mapEnumClass(mJustify, justify),
      mapEnumClass(mItems, items),
      mapEnumClass(mWrap, wrap),
      mapEnumClass(mGrow, grow),
      mapEnumClass(mFlex, flex),
      mapEnumClass(mShrink, shrink),
      mapEnumClass(mContent, content),
      mapEnumClass(mSelf, self),
      mapEnumClass(mWidth, w),
      getResponsiveAll({ sm, md, lg, xl }),
      className
    )}
    {...otherProps}
  >
    {children}
  </div>
));

Flex.displayName = 'Flex';
Flex.defaultProps = {};

export default Flex;
