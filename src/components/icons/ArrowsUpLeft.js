import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsUpLeft', 'arrows-up-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 7l-4 -4l-4 4" />
  <path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
  <path d="M7 13l-4 4l4 4" />
</svg>
));
