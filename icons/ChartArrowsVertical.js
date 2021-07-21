import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartArrowsVertical', 'chart-arrows-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 21v-14" />
  <path d="M9 15l3 -3l3 3" />
  <path d="M15 10l3 -3l3 3" />
  <line x1="3" y1="21" x2="21" y2="21" />
  <line x1="12" y1="21" x2="12" y2="12" />
  <path d="M3 6l3 -3l3 3" />
  <path d="M6 21v-18" />
</svg>
));
