import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Slideshow', 'slideshow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="15" y1="6" x2="15.01" y2="6" />
  <rect x="3" y="3" width="18" height="14" rx="3" />
  <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
  <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
  <line x1="8" y1="21" x2="8.01" y2="21" />
  <line x1="12" y1="21" x2="12.01" y2="21" />
  <line x1="16" y1="21" x2="16.01" y2="21" />
</svg>
));
