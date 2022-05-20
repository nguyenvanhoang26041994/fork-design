import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandYcombinator', 'brand-ycombinator', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M8 7.002l4 5.998l4 -6" />
  <line x1="12" y1="17" x2="12" y2="13" />
</svg>
));
