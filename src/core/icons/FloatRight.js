import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('FloatRight', 'float-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect width="6" height="6" x="14" y="5" rx="1" />
  <line x1="4" y1="7" x2="10" y2="7" />
  <line x1="4" y1="11" x2="10" y2="11" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>
));
