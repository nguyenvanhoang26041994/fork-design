import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowRampRight', 'arrow-ramp-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="3" x2="7" y2="11.707" />
  <path d="M11 7l-4 -4l-4 4" />
  <path d="M17 14l4 -4l-4 -4" />
  <path d="M7 21a11 11 0 0 1 11 -11h3" />
</svg>
));
