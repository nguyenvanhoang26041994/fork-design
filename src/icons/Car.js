import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Car', 'car', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
</svg>
));
