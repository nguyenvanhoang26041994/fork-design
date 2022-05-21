import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('FlipVertical', 'flip-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="21" />
  <polyline points="16 7 16 17 21 17 16 7" />
  <polyline points="8 7 8 17 3 17 8 7" />
</svg>
));
