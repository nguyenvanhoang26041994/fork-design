import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartArrows', 'chart-arrows', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="18" x2="17" y2="18" />
  <path d="M9 9l3 3l-3 3" />
  <path d="M14 15l3 3l-3 3" />
  <line x1="3" y1="3" x2="3" y2="21" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <path d="M18 3l3 3l-3 3" />
  <line x1="3" y1="6" x2="21" y2="6" />
</svg>
));
