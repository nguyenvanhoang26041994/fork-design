import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('StairsDown', 'stairs-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4v-4h4v-4h4v-4h4" />
  <path d="M11 4l-7 7v-4m4 4h-4" />
</svg>
));
