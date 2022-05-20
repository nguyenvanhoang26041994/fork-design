import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsDiagonal2', 'arrows-diagonal-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="16 20 20 20 20 16" />
  <line x1="14" y1="14" x2="20" y2="20" />
  <polyline points="8 4 4 4 4 8" />
  <line x1="4" y1="4" x2="10" y2="10" />
</svg>
));
