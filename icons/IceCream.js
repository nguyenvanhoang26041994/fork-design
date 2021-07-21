import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('IceCream', 'ice-cream', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21.5v-4.5" />
  <path d="M8 17h8v-10a4 4 0 1 0 -8 0v10z" />
  <path d="M8 10.5l8 -3.5" />
  <path d="M8 14.5l8 -3.5" />
</svg>
));
