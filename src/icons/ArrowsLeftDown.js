import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsLeftDown', 'arrows-left-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 3l-4 4l4 4" />
  <path d="M3 7h11a3 3 0 0 1 3 3v11" />
  <path d="M13 17l4 4l4 -4" />
</svg>
));
