import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Circle5', 'circle-5', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
