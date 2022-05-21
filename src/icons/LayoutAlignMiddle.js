import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('LayoutAlignMiddle', 'layout-align-middle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="9" y2="12" />
  <line x1="15" y1="12" x2="20" y2="12" />
  <rect x="9" y="6" width="6" height="12" rx="2" />
</svg>
));
