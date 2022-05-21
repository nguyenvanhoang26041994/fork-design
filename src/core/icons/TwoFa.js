import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TwoFa', '2fa', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
  <path d="M10 16v-8h4" />
  <line x1="10" y1="12" x2="13" y2="12" />
  <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
  <line x1="17" y1="13" x2="21" y2="13" />
</svg>
));
