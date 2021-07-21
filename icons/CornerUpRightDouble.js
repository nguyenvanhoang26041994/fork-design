import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CornerUpRightDouble', 'corner-up-right-double', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 18v-6a3 3 0 0 1 3 -3h7" />
  <path d="M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4" />
</svg>
));
