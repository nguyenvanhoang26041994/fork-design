import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TrendingUp', 'trending-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 17 9 11 13 15 21 7" />
  <polyline points="14 7 21 7 21 14" />
</svg>
));
