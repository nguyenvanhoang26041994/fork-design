import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartBubble', 'chart-bubble', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="16" r="3" />
  <circle cx="16" cy="19" r="2" />
  <circle cx="14.5" cy="7.5" r="4.5" />
</svg>
));
