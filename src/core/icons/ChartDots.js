import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartDots', 'chart-dots', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 3v18h18" />
  <circle cx="9" cy="9" r="2" />
  <circle cx="19" cy="7" r="2" />
  <circle cx="14" cy="15" r="2" />
  <line x1="10.16" y1="10.62" x2="12.5" y2="13.5" />
  <path d="M15.088 13.328l2.837 -4.586" />
</svg>
));
