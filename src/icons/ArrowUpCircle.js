import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowUpCircle', 'arrow-up-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="8" x2="8" y2="12" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <line x1="16" y1="12" x2="12" y2="8" />
</svg>
));
