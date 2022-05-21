import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Stack2', 'stack-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
  <path d="M4 14l8 4l8 -4" />
</svg>
));
