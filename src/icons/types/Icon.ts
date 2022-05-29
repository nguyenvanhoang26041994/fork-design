import type React from 'react';

export default interface IconProps extends React.SVGAttributes<{}> {
  sx?: object,
  size?: string,
  color?: string,
  stroke?: string,
}