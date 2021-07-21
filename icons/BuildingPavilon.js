import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BuildingPavilon', 'building-pavilon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
  <line x1="6" y1="21" x2="6" y2="12" />
  <line x1="18" y1="21" x2="18" y2="12" />
  <path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
</svg>
));
