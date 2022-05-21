import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyShekel', 'currency-shekel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
  <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
</svg>
));
