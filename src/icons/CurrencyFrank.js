import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyFrank', 'currency-frank', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 5h-6a2 2 0 0 0 -2 2v12" />
  <path d="M7 15h4" />
  <path d="M9 11h7" />
</svg>
));
