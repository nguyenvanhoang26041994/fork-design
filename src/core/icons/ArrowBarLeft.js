import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowBarLeft', 'arrow-bar-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="14" y2="12" />
  <line x1="4" y1="12" x2="8" y2="16" />
  <line x1="4" y1="12" x2="8" y2="8" />
  <line x1="20" y1="4" x2="20" y2="20" />
</svg>
));
