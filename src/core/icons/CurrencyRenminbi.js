import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyRenminbi', 'currency-renminbi', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 9v8a2 2 0 1 0 4 0" />
  <path d="M19 9h-14" />
  <path d="M19 5h-14" />
  <path d="M9 9v4c0 2.5 -.667 4 -2 6" />
</svg>
));
