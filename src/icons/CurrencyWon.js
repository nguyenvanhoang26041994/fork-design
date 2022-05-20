import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrencyWon', 'currency-won', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l3.245 11.358a0.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a0.85 .85 0 0 0 1.624 -.035l3.245 -11.358" />
  <path d="M21 10h-18" />
  <path d="M21 14h-18" />
</svg>
));
