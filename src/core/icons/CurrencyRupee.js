import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyRupee', 'currency-rupee', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
  <line x1="7" y1="9" x2="18" y2="9" />
</svg>
));
