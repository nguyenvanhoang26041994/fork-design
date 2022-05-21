import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ManualGearbox', 'manual-gearbox', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="6" r="2" />
  <circle cx="12" cy="6" r="2" />
  <circle cx="19" cy="6" r="2" />
  <circle cx="5" cy="18" r="2" />
  <circle cx="12" cy="18" r="2" />
  <line x1="5" y1="8" x2="5" y2="16" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
</svg>
));
