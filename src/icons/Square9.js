import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Square9', 'square-9', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="10" r="2" />
  <path d="M10 14a2 2 0 1 0 4 0v-4" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>
));
