import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TriangleSquareCircle', 'triangle-square-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l-4 7h8z" />
  <circle cx="17" cy="17" r="3" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
</svg>
));
