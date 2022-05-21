import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowRightSquare', 'arrow-right-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="12" x2="21" y2="12" />
  <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 10h4v4h-4z" />
</svg>
));
