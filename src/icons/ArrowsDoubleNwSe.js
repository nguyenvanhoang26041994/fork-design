import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsDoubleNwSe', 'arrows-double-nw-se', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 21l-11 -11" />
  <path d="M3 14v-4h4" />
  <path d="M17 14h4v-4" />
  <line x1="10" y1="3" x2="21" y2="14" />
</svg>
));
