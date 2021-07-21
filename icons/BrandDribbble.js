import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandDribbble', 'brand-dribbble', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
  <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
  <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
</svg>
));
