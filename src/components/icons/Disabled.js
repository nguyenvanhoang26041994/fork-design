import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Disabled', 'disabled', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="11" cy="5" r="2" />
  <polyline points="11 7 11 15 15 15 19 20" />
  <line x1="11" y1="11" x2="16" y2="11" />
  <path d="M7 11.5a5 5 0 1 0 6 7.5" />
</svg>
));
