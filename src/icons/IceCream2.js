import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('IceCream2', 'ice-cream-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.657 11.004a6 6 0 1 0 -11.315 -.002" />
  <path d="M6.342 11l5.658 11l5.657 -10.996z" />
</svg>
));
