import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ChartCircles', 'chart-circles', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9.5" cy="9.5" r="5.5" />
  <circle cx="14.5" cy="14.5" r="5.5" />
</svg>
));
