import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyYen', 'currency-yen', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 19v-7l-5 -7m10 0l-5 7" />
  <line x1="8" y1="17" x2="16" y2="17" />
  <line x1="8" y1="13" x2="16" y2="13" />
</svg>
));
