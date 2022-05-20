import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowLeftSquare', 'arrow-left-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 12h-14" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 14h-4v-4h4z" />
</svg>
));
