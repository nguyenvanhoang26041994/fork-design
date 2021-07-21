import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CornerDownLeftDouble', 'corner-down-left-double', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 5v6a3 3 0 0 1 -3 3h-7" />
  <path d="M13 10l-4 4l4 4m-5 -8l-4 4l4 4" />
</svg>
));
