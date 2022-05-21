import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Dice', 'dice', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
</svg>
));
