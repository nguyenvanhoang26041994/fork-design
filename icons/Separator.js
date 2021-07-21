import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Separator', 'separator', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="12" x2="3" y2="12.01" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="21" y1="12" x2="21" y2="12.01" />
</svg>
));
