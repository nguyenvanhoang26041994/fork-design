import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Line', 'line', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="18" r="2" />
  <circle cx="18" cy="6" r="2" />
  <line x1="7.5" y1="16.5" x2="16.5" y2="7.5" />
</svg>
));
