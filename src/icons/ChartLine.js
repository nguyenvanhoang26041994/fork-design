import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ChartLine', 'chart-line', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="19" x2="20" y2="19" />
  <polyline points="4 15 8 9 12 11 16 6 20 10" />
</svg>
));
