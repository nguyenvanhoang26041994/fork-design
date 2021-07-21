import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TrendingDown', 'trending-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 7 9 13 13 9 21 17" />
  <polyline points="21 10 21 17 14 17" />
</svg>
));
