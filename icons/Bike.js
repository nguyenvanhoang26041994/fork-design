import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Bike', 'bike', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="18" r="3" />
  <circle cx="19" cy="18" r="3" />
  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
  <circle cx="17" cy="5" r="1" />
</svg>
));
