import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Headset', 'headset', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="13" rx="2" width="4" height="6" />
  <rect x="16" y="13" rx="2" width="4" height="6" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
  <path d="M18 19a6 3 0 0 1 -6 3" />
</svg>
));
