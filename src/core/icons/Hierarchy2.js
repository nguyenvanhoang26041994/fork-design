import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Hierarchy2', 'hierarchy-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 3h4v4h-4z" />
  <path d="M3 17h4v4h-4z" />
  <path d="M17 17h4v4h-4z" />
  <path d="M7 17l5 -4l5 4" />
  <line x1="12" y1="7" x2="12" y2="13" />
</svg>
));
