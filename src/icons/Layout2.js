import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Layout2', 'layout-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="5" rx="2" />
  <rect x="4" y="13" width="6" height="7" rx="2" />
  <rect x="14" y="4" width="6" height="7" rx="2" />
  <rect x="14" y="15" width="6" height="5" rx="2" />
</svg>
));
