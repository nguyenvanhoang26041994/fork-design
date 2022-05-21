import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Tank', 'tank', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="12" width="18" height="6" rx="3" />
  <path d="M6 12l1 -5h5l3 5" />
  <line x1="21" y1="9" x2="13.2" y2="9" />
</svg>
));
