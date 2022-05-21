import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Binary', 'binary', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 10v-5h-1m8 14v-5h-1" />
  <rect x="15" y="5" width="3" height="5" rx=".5" />
  <rect x="10" y="14" width="3" height="5" rx=".5" />
  <path d="M6 10h.01m-.01 9h.01" />
</svg>
));
