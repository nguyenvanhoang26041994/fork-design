import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsLeftRight', 'arrows-left-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="21" y1="17" x2="3" y2="17" />
  <path d="M6 10l-3 -3l3 -3" />
  <line x1="3" y1="7" x2="21" y2="7" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
