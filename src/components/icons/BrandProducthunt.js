import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandProducthunt', 'brand-producthunt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
