import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsDown', 'arrows-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="21" x2="7" y2="3" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M4 18l3 3l3 -3" />
  <line x1="17" y1="21" x2="17" y2="3" />
</svg>
));
