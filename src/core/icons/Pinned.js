import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Pinned', 'pinned', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
  <line x1="12" y1="16" x2="12" y2="21" />
  <line x1="8" y1="4" x2="16" y2="4" />
</svg>
));
