import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Dimensions', 'dimensions', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 5h11" />
  <path d="M12 7l2 -2l-2 -2" />
  <path d="M5 3l-2 2l2 2" />
  <path d="M19 10v11" />
  <path d="M17 19l2 2l2 -2" />
  <path d="M21 12l-2 -2l-2 2" />
  <rect x="3" y="10" width="11" height="11" rx="2" />
</svg>
));
