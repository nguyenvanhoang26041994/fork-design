import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyLira', 'currency-lira', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5v15a7 7 0 0 0 7 -7" />
  <path d="M6 15l8 -4" />
  <path d="M14 7l-8 4" />
</svg>
));
