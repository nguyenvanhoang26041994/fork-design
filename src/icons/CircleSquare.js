import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('CircleSquare', 'circle-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9.5" cy="9.5" r="6.5" />
  <rect x="10" y="10" width="11" height="11" rx="2" />
</svg>
));
