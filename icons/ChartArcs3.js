import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartArcs3', 'chart-arcs-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <path d="M7 12a5 5 0 1 0 5 -5" />
  <path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
</svg>
));
