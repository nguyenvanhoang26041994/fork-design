import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Code', 'code', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="14" y1="4" x2="10" y2="20" />
</svg>
));
