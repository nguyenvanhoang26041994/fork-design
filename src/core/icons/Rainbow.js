import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Rainbow', 'rainbow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
  <path d="M18 17a6 6 0 1 0 -12 0" />
  <path d="M14 17a2 2 0 1 0 -4 0" />
</svg>
));
