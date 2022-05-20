import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('SortDescendingLetters', 'sort-descending-letters', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
  <path d="M19 10h-4l4 -7h-4" />
  <path d="M4 15l3 3l3 -3" />
  <path d="M7 6v12" />
</svg>
));
