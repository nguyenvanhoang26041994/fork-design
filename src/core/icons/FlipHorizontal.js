import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('FlipHorizontal', 'flip-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="12" x2="21" y2="12" />
  <polyline points="7 16 17 16 7 21 7 16" />
  <polyline points="7 8 17 8 7 3 7 8" />
</svg>
));
