import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('History', 'history', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="12 8 12 12 14 14" />
  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
</svg>
));
