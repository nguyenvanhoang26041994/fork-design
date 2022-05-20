import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsDoubleSeNw', 'arrows-double-se-nw', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="10" x2="14" y2="21" />
  <path d="M14 17v4h-4" />
  <path d="M14 3h-4v4" />
  <path d="M21 14l-11 -11" />
</svg>
));
