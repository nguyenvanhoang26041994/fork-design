import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('SortAscending2', 'sort-ascending-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 9l3 -3l3 3" />
  <rect x="5" y="5" width="5" height="5" rx=".5" />
  <rect x="5" y="14" width="5" height="5" rx=".5" />
  <path d="M17 6v12" />
</svg>
));
