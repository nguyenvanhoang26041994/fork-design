import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CurrentLocation', 'current-location', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <circle cx="12" cy="12" r="8" />
  <line x1="12" y1="2" x2="12" y2="4" />
  <line x1="12" y1="20" x2="12" y2="22" />
  <line x1="20" y1="12" x2="22" y2="12" />
  <line x1="2" y1="12" x2="4" y2="12" />
</svg>
));
