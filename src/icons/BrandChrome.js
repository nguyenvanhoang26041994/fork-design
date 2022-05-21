import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BrandChrome', 'brand-chrome', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="9" x2="20.4" y2="9" />
  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />
  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" />
</svg>
));
