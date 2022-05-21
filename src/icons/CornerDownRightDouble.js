import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('CornerDownRightDouble', 'corner-down-right-double', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 5v6a3 3 0 0 0 3 3h7" />
  <path d="M10 10l4 4l-4 4m5 -8l4 4l-4 4" />
</svg>
));
