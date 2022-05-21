import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Ruler2', 'ruler-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 3l4 4l-14 14l-4 -4z" />
  <path d="M16 7l-1.5 -1.5" />
  <path d="M13 10l-1.5 -1.5" />
  <path d="M10 13l-1.5 -1.5" />
  <path d="M7 16l-1.5 -1.5" />
</svg>
));
