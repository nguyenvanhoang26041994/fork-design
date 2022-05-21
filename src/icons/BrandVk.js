import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BrandVk', 'brand-vk', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12" />
  <path d="M20 6c-1 2 -3 5 -5 6h-3" />
  <path d="M20 18c-1 -2 -3 -5 -5 -6" />
</svg>
));
