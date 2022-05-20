import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartArcs', 'chart-arcs', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
  <path d="M3 12a9 9 0 1 0 9 -9" />
</svg>
));
