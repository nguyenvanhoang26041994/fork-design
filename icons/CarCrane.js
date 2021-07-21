import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CarCrane', 'car-crane', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
  <path d="M12 18v-11h3" />
  <path d="M3 17v-5h9" />
  <path d="M4 12v-6l18 -3v2" />
  <path d="M8 12v-4l-4 -2" />
</svg>
));
