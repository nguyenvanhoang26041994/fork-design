import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Adjustments', 'adjustments', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="10" r="2" />
  <line x1="6" y1="4" x2="6" y2="8" />
  <line x1="6" y1="12" x2="6" y2="20" />
  <circle cx="12" cy="16" r="2" />
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="18" x2="12" y2="20" />
  <circle cx="18" cy="7" r="2" />
  <line x1="18" y1="4" x2="18" y2="5" />
  <line x1="18" y1="9" x2="18" y2="20" />
</svg>
));
