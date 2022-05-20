import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Globe', 'globe', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="10" r="4" />
  <path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" />
  <line x1="12" y1="18" x2="12" y2="22" />
  <line x1="8" y1="22" x2="16" y2="22" />
</svg>
));
