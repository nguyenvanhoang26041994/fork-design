import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowBarToDown', 'arrow-bar-to-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="12" y1="14" x2="12" y2="4" />
  <line x1="12" y1="14" x2="16" y2="10" />
  <line x1="12" y1="14" x2="8" y2="10" />
</svg>
));
