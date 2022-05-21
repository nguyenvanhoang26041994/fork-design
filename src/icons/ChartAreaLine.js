import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ChartAreaLine', 'chart-area-line', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />
  <polyline points="4 12 7 8 11 10 16 4 20 8" />
</svg>
));
