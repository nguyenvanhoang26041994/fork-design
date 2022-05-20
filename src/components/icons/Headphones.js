import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Headphones', 'headphones', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="13" rx="2" width="5" height="7" />
  <rect x="15" y="13" rx="2" width="5" height="7" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
</svg>
));
