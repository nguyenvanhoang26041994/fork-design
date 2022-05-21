import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CornerLeftUpDouble', 'corner-left-up-double', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" />
  <path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" />
</svg>
));
