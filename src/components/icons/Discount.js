import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Discount', 'discount', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="15" x2="15" y2="9" />
  <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
  <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
