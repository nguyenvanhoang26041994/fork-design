import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BuildingMonument', 'building-monument', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 18l2 -13l2 -2l2 2l2 13" />
  <path d="M5 21v-3h14v3" />
  <line x1="3" y1="21" x2="21" y2="21" />
</svg>
));
