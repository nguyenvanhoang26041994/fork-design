import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandPocket', 'brand-pocket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2" />
  <polyline points="8 11 12 15 16 11" />
</svg>
));
