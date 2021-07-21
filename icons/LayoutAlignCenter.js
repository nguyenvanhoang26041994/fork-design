import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('LayoutAlignCenter', 'layout-align-center', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="4" x2="12" y2="9" />
  <line x1="12" y1="15" x2="12" y2="20" />
  <rect x="6" y="9" width="12" height="6" rx="2" />
</svg>
));
