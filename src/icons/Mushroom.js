import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Mushroom', 'mushroom', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a0.9 .9 0 0 0 .9 .9h14.2a0.9 .9 0 0 0 .9 -.9z" />
  <path d="M10 12v7a2 2 0 1 0 4 0v-7" />
</svg>
));
