import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BrandKotlin', 'brand-kotlin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 20h-16v-16h16" />
  <line x1="4" y1="20" x2="20" y2="4" />
  <path d="M4 12l8 -8" />
  <line x1="12" y1="12" x2="20" y2="20" />
</svg>
));
