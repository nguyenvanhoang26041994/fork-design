import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Math', 'math', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 13l4 4m0 -4l-4 4" />
  <path d="M20 5h-7l-4 14l-3 -6h-2" />
</svg>
));
