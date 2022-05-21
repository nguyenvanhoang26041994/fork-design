import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandShazam', 'brand-shazam', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12l2 -2a2.828 2.828 0 0 1 4 0a2.828 2.828 0 0 1 0 4l-3 3" />
  <path d="M14 12l-2 2a2.828 2.828 0 1 1 -4 -4l3 -3" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
