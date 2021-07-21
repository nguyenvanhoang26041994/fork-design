import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyTugrik', 'currency-tugrik', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 6h10" />
  <path d="M12 6v13" />
  <path d="M8 17l8 -3" />
  <path d="M16 10l-8 3" />
</svg>
));
