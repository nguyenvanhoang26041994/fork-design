import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsSort', 'arrows-sort', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 9l4 -4l4 4m-4 -4v14" />
  <path d="M21 15l-4 4l-4 -4m4 4v-14" />
</svg>
));
