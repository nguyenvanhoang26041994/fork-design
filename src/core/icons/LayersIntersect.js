import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('LayersIntersect', 'layers-intersect', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="8" y="4" width="12" height="12" rx="2" />
  <rect x="4" y="8" width="12" height="12" rx="2" />
</svg>
));
