import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Switch', 'switch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="15 4 19 4 19 8" />
  <line x1="14.75" y1="9.25" x2="19" y2="4" />
  <line x1="5" y1="19" x2="9" y2="15" />
  <polyline points="15 19 19 19 19 15" />
  <line x1="5" y1="5" x2="19" y2="19" />
</svg>
));
