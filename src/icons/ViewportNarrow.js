import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ViewportNarrow', 'viewport-narrow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h7l-3 -3m0 6l3 -3" />
  <path d="M21 12h-7l3 -3m0 6l-3 -3" />
  <path d="M9 6v-3h6v3" />
  <path d="M9 18v3h6v-3" />
</svg>
));
