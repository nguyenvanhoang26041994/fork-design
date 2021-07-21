import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyEthereum', 'currency-ethereum', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 12l6 -9l6 9l-6 9z" />
  <path d="M6 12l6 -3l6 3l-6 2z" />
</svg>
));
