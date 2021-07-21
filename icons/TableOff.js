import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TableOff', 'table-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 4h10a2 2 0 0 1 2 2v10m-.588 3.417c-.362 .36 -.86 .583 -1.412 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.053 .586 -1.414" />
  <path d="M4 10h6m4 0h6" />
  <path d="M10 4v2m0 4v10" />
  <line x1="3" y1="3" x2="21" y2="21" />
</svg>
));
