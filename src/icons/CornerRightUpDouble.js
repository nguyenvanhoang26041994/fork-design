import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CornerRightUpDouble', 'corner-right-up-double', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 19h6a3 3 0 0 0 3 -3v-7" />
  <path d="M10 13l4 -4l4 4m-8 -5l4 -4l4 4" />
</svg>
));
