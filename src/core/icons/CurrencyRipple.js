import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyRipple', 'currency-ripple', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="12" r="3" />
  <circle cx="17" cy="7" r="3" />
  <circle cx="17" cy="17" r="3" />
  <path d="M10 12h3l2 -2.5" />
  <path d="M15 14.5l-2 -2.5" />
</svg>
));
