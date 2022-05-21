import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Terminal2', 'terminal-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l3 3l-3 3" />
  <line x1="13" y1="15" x2="16" y2="15" />
  <rect x="3" y="4" width="18" height="16" rx="2" />
</svg>
));
