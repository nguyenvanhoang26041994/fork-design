import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('SoccerField', 'soccer-field', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <path d="M3 9h3v6h-3z" />
  <path d="M18 9h3v6h-3z" />
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <line x1="12" y1="5" x2="12" y2="19" />
</svg>
));
