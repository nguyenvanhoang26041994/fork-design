import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BuildingCarousel', 'building-carousel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="6" />
  <circle cx="5" cy="8" r="2" />
  <circle cx="12" cy="4" r="2" />
  <circle cx="19" cy="8" r="2" />
  <circle cx="5" cy="16" r="2" />
  <circle cx="19" cy="16" r="2" />
  <path d="M8 22l4 -10l4 10" />
</svg>
));
