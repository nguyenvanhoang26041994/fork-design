import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TextDirectionRtl', 'text-direction-rtl', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
  <path d="M14 15v-11" />
  <path d="M10 15v-11" />
  <path d="M5 19h14" />
  <path d="M7 21l-2 -2l2 -2" />
</svg>
));
