import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Emphasis', 'emphasis', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 5h-8v10h8m-1 -5h-7" />
  <line x1="6" y1="20" x2="6" y2="20.01" />
  <line x1="10" y1="20" x2="10" y2="20.01" />
  <line x1="14" y1="20" x2="14" y2="20.01" />
  <line x1="18" y1="20" x2="18" y2="20.01" />
</svg>
));
