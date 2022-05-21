import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('SteeringWheel', 'steering-wheel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="2" />
  <line x1="12" y1="14" x2="12" y2="21" />
  <line x1="10" y1="12" x2="3.25" y2="10" />
  <line x1="14" y1="12" x2="20.75" y2="10" />
</svg>
));
