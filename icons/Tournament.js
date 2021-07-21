import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Tournament', 'tournament', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" />
  <path d="M5 14h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" />
  <path d="M10 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-4" />
  <line x1="15" y1="12" x2="20" y2="12" />
</svg>
));
