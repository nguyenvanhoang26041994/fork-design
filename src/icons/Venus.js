import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Venus', 'venus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="9" r="5" />
  <line x1="12" y1="14" x2="12" y2="21" />
  <line x1="9" y1="18" x2="15" y2="18" />
</svg>
));
