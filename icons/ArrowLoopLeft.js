import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowLoopLeft', 'arrow-loop-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
  <path d="M7 15l-3 -3l3 -3" />
</svg>
));
