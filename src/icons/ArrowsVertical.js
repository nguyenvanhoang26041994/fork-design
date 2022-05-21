import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsVertical', 'arrows-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="8 7 12 3 16 7" />
  <polyline points="8 17 12 21 16 17" />
  <line x1="12" y1="3" x2="12" y2="21" />
</svg>
));
