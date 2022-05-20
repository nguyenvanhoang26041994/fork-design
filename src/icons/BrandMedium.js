import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandMedium', 'brand-medium', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M8 9h1l3 3l3 -3h1" />
  <line x1="8" y1="15" x2="10" y2="15" />
  <line x1="14" y1="15" x2="16" y2="15" />
  <line x1="9" y1="9" x2="9" y2="15" />
  <line x1="15" y1="9" x2="15" y2="15" />
</svg>
));
