import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowRampLeft', 'arrow-ramp-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="3" x2="17" y2="11.707" />
  <path d="M13 7l4 -4l4 4" />
  <path d="M7 14l-4 -4l4 -4" />
  <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
</svg>
));
