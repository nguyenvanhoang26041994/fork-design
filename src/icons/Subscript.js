import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Subscript', 'subscript', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7l8 10m-8 0l8 -10" />
  <path d="M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
</svg>
));
