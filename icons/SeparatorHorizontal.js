import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('SeparatorHorizontal', 'separator-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="20" y2="12" />
  <polyline points="8 8 12 4 16 8" />
  <polyline points="16 16 12 20 8 16" />
</svg>
));
