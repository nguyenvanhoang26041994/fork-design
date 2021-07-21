import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandAppstore', 'brand-appstore', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
  <path d="M7 14h5m2.9 0h2.1" />
  <path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1.003 -1.805" />
</svg>
));
