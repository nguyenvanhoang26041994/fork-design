import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowUpRight', 'arrow-up-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="7" x2="7" y2="17" />
  <polyline points="8 7 17 7 17 16" />
</svg>
));
