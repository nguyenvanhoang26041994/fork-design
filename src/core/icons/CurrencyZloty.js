import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyZloty', 'currency-zloty', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 18h-7l7 -7h-7" />
  <path d="M17 18v-13" />
  <path d="M14 14.5l6 -3.5" />
</svg>
));
