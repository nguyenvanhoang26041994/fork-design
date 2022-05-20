import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('DirectionHorizontal', 'direction-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 9l-3 3l3 3" />
  <path d="M14 9l3 3l-3 3" />
</svg>
));
