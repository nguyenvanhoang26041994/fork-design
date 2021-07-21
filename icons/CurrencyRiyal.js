import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyRiyal', 'currency-riyal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 9v2a2 2 0 1 1 -4 0v-1v1a2 2 0 1 1 -4 0v-1v4a2 2 0 1 1 -4 0v-2" />
  <path d="M18 12.01v-.01" />
  <path d="M22 10v1a5 5 0 0 1 -5 5" />
</svg>
));
