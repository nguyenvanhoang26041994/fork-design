import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyKroneDanish', 'currency-krone-danish', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 6v12" />
  <path d="M5 12c3.5 0 6 -3 6 -6" />
  <path d="M5 12c3.5 0 6 3 6 6" />
  <path d="M15 10v8" />
  <path d="M19 10a4 4 0 0 0 -4 4" />
  <path d="M20 18.01v-.01" />
</svg>
));
