import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Drone', 'drone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10h4v4h-4z" />
  <line x1="10" y1="10" x2="6.5" y2="6.5" />
  <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
  <path d="M14 10l3.5 -3.5" />
  <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
  <line x1="14" y1="14" x2="17.5" y2="17.5" />
  <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
  <line x1="10" y1="14" x2="6.5" y2="17.5" />
  <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
</svg>
));
