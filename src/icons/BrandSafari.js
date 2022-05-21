import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BrandSafari', 'brand-safari', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="8 16 10 10 16 8 14 14 8 16" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
