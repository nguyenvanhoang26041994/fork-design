import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('SortAscending', 'sort-ascending', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="11" y2="6" />
  <line x1="4" y1="12" x2="11" y2="12" />
  <line x1="4" y1="18" x2="13" y2="18" />
  <polyline points="15 9 18 6 21 9" />
  <line x1="18" y1="6" x2="18" y2="18" />
</svg>
));
