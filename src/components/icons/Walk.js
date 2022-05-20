import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Walk', 'walk', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="13" cy="4" r="1" />
  <line x1="7" y1="21" x2="10" y2="17" />
  <path d="M16 21l-2 -4l-3 -3l1 -6" />
  <path d="M6 12l2 -3l4 -1l3 3l3 1" />
</svg>
));
