import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('LineHeight', 'line-height', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 8 6 5 9 8" />
  <polyline points="3 16 6 19 9 16" />
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="13" y1="6" x2="20" y2="6" />
  <line x1="13" y1="12" x2="20" y2="12" />
  <line x1="13" y1="18" x2="20" y2="18" />
</svg>
));
