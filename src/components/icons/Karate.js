import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Karate', 'karate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="4" r="1" />
  <path d="M3 9l4.5 1l3 2.5" />
  <path d="M13 21v-8l3 -5.5" />
  <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
</svg>
));
